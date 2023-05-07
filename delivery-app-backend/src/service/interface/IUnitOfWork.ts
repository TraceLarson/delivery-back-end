import Client from '@/domain/implementation/Client';
import IRepository from './IRepository';
import Employee from '@/domain/implementation/Employee';
import Device from '@/domain/implementation/Device';
import Order from '@/domain/implementation/Order';
import RequestLog from '@/domain/implementation/RequestLog';
import UserLog from '@/domain/implementation/UserLog';
import IRepository from './IRepository';

export default interface IUnitOfWork {
  // region Properties

  Clients: IRepository<Client>;

  Devices: IRepository<Device>;

  Employees: IRepository<Employee>;

  Orders: IRepository<Order>;

  RequestLogs: IRepository<RequestLog>;

  UserLogs: IRepository<UserLog>;

  // endregion

  // region Behavior

  CreateUowRepository<T>(tableName: string): IRepository<T>;

  // endregion
}
