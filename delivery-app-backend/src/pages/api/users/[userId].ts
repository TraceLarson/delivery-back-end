import { NextApiRequest, NextApiResponse } from 'next';
import { ClientType } from '../../../util/types';
import { requestOptions } from '../../../util/DBConstants';
import IEmployeeService from '../../../service/interface/IEmployeeService';
import ServiceFactory from '../../../service/ServiceFactory';
import UnitOfWork from '../../../service/persistence/UnitOfWork';
import IUnitOfWork from '../../../service/interface/IUnitOfWork';
import IServiceFactory from '../../../service/interface/IServiceFactory';
import IClientService from '../../../service/interface/IClientService';
import Employee from '../../../domain/implementation/Employee';
import Client from '@/domain/implementation/Client';

const serviceFactory: IServiceFactory = new ServiceFactory();
const unitOfWork: IUnitOfWork = new UnitOfWork();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;
  const employeeService: IEmployeeService = serviceFactory.CreateEmployeeService(unitOfWork);
  const clientService: IClientService = serviceFactory.CreateClientService(unitOfWork);

  const foundEmployees = await employeeService.FindByRecordId<Employee>(userId as string).then((result) => {
    console.log(`Found ${result.result?.length} employees`);
    return result.result;
  });

  const foundClients = await clientService.FindByRecordId<Client>(userId as string).then((result) => {
    console.log(`Found ${result.result?.length} clients`);
    return result.result;
  });
  return res.status(201).json({ employees: foundEmployees, clients: foundClients });
}
