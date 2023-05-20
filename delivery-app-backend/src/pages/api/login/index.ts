import { NextApiRequest, NextApiResponse } from 'next';
import { UserLoginDataType } from '../../../util/types';
import UnitOfWork from '@/service/persistence/UnitOfWork';
import ServiceFactory from '../../../service/ServiceFactory';
import Client from '@/domain/implementation/Client';
import Employee from '@/domain/implementation/Employee';
import Encryption from '@/util/Encryption';

const clientService = new ServiceFactory().CreateClientService(new UnitOfWork());
const employeeService = new ServiceFactory().CreateEmployeeService(new UnitOfWork());
const encryption = Encryption.Singleton;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let loginData: UserLoginDataType = req.body;
  if (!loginData) {
    res.status(500).json({ error: `no login data provided` });
    return;
  }

  const clients: Client[] = (await clientService.FindAll<Client>()).result ?? new Array<Client>();
  if (clients.length === 0) {
    res.status(500).json({ error: `found 0 clients` });
    return;
  }
  const foundClient: Client = clients.find((client) => client.email === loginData.email && encryption.comparePassword(client.password, loginData.password)) ?? new Client();

  const employees = (await employeeService.FindAll<Employee>()).result ?? new Array<Employee>();
  if (employees.length === 0) {
    res.status(500).json({ error: `found 0 employees` });
    return;
  }
  const foundEmployee: Employee =
    employees.find((employee) => employee.email === loginData.email && encryption.comparePassword(employee.password, loginData.password)) ?? new Employee();

  res.status(200).json(user);
}
