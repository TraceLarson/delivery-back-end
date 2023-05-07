import ServiceFactory from '@/service/ServiceFactory';
import UnitOfWork from '@/service/persistence/UnitOfWork';
import { NextApiRequest, NextApiResponse } from 'next';
import Employee from '@/domain/implementation/Employee';
import { DeleteResultType } from '@/util/types';
import Employee from '@/domain/implementation/Employee';

const unitOfWork = new UnitOfWork();
const serviceFactory = new ServiceFactory();
const employeeservice = serviceFactory.CreateEmployeeService(unitOfWork);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const foundEmployees = await employeeservice.FindAll<Employee>();
  const employees: Employee[] | null = foundEmployees.result;
  console.log(`Found ${employees?.length} employees`);

  if (employees == null || employees.length == 0) {
    res.status(404).json(JSON.parse(foundEmployees.error || 'No Employees Found'));
    return;
  }

  const deleteResults: Promise<DeleteResultType<Employee>>[] = employees.map(async (employee) => {
    console.log(`Deleting employee.g ${JSON.stringify(employee.RecordId)}`);
    return await employeeservice.RemoveEmployee<Employee>(employee.RecordId);
  });

  await Promise.all(deleteResults).then((results) => {
    const successfulResults = results.filter((result) => result.status >= 200 && result.status < 300);
    const failedResults = results.filter((result) => result.status >= 400);
    const successfulCount = successfulResults.length;
    const failedCount = failedResults.length;

    res.status(200).json({ successfulCount, failedCount, successfulResults, failedResults });
  });
}
