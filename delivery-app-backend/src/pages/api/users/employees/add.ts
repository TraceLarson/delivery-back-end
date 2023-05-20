import Employee from '@/domain/implementation/Employee';
import { NextApiRequest, NextApiResponse } from 'next';
import { EmployeeType } from '../../../../util/types';
import UnitOfWork from '@/service/persistence/UnitOfWork';
import ServiceFactory from '@/service/ServiceFactory';

const unitOfWork = new UnitOfWork();
const serviceFactory = new ServiceFactory();
const employeeService = serviceFactory.CreateEmployeeService(unitOfWork);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAdmin: boolean = JSON.parse(req.query.isAdmin as string);
  const employee: Employee = await CreateEmployeeObject(req.body, isAdmin);
  const response = await employeeService.AddEmployee<Employee>(employee);

  res.status(response.status).json(response.result || response.error);
}

async function CreateEmployeeObject(employee: EmployeeType, isAdmin: boolean): Promise<Employee> {
  console.log(employee);
  const newEmployee = new Employee();
  newEmployee.__createdtime__ = employee.__createdtime__;
  newEmployee.__updatedtime__ = employee.__updatedtime__;
  newEmployee.password = employee.password;
  newEmployee.state = employee.state;
  newEmployee.city = employee.city;
  newEmployee.lastName = employee.lastName;
  newEmployee.zipCode = employee.zipCode;
  newEmployee.email = employee.email;
  newEmployee.firstName = employee.firstName;
  newEmployee.isEmployee = employee.isEmployee;
  newEmployee.isAdmin = isAdmin;
  employee.RecordId = employee.RecordId;

  return await newEmployee.hashPassword();
}
