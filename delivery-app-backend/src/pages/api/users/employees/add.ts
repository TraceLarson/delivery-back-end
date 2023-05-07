import Employee from '@/domain/implementation/Employee';
import { NextApiRequest, NextApiResponse } from 'next';
import { EmployeeType } from '../../../../util/types';
import UnitOfWork from '@/service/persistence/UnitOfWork';
import ServiceFactory from '@/service/ServiceFactory';

const unitOfWork = new UnitOfWork();
const serviceFactory = new ServiceFactory();
const employeeService = serviceFactory.CreateEmployeeService(unitOfWork);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const employee: Employee = await CreateEmployeeObject(req.body);
  const response = await employeeService.AddEmployee<Employee>(employee);

  res.status(response.status).json(response.result || response.error);
}

async function CreateEmployeeObject(employee: EmployeeType): Promise<Employee> {
  console.log(employee);
  return await new Employee(
    employee.__createdtime__,
    employee.__updatedtime__,
    employee.password,
    employee.state,
    employee.city,
    employee.lastName,
    employee.zipCode,
    employee.email,
    employee.firstName,
    employee.RecordId
  ).hashPassword();
}
