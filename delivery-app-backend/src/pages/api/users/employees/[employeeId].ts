import { NextApiRequest, NextApiResponse } from 'next';
import Client from '@/domain/implementation/Client';
import Employee from '@/domain/implementation/Employee';
import ServiceFactory from '@/service/ServiceFactory';
import IClientService from '@/service/interface/IClientService';
import IEmployeeService from '@/service/interface/IEmployeeService';
import IServiceFactory from '@/service/interface/IServiceFactory';
import IUnitOfWork from '@/service/interface/IUnitOfWork';
import UnitOfWork from '@/service/persistence/UnitOfWork';

const serviceFactory: IServiceFactory = new ServiceFactory();
const unitOfWork: IUnitOfWork = new UnitOfWork();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { employeeId } = req.query;
  const employeeService: IEmployeeService = serviceFactory.CreateEmployeeService(unitOfWork);

  const foundEmployees = await employeeService.FindByRecordId<Employee>(employeeId as string).then((result) => {
    console.log(`Found ${result.result?.length} employees`);
    return result.result;
  });

  return res.status(201).json({ employees: foundEmployees });
}
