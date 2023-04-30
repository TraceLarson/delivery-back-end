import Client from '@/domain/implementation/Client';
import Device from '@/domain/implementation/Device';
import Employee from '@/domain/implementation/Employee';
import Order from '@/domain/implementation/Order';
import RequestLog from '@/domain/implementation/RequestLog';
import UserLog from '@/domain/implementation/UserLog';
import IUnitOfWork from '../interface/IUnitOfWork';
import { Tables } from '@/util/DBConstants';
import IRepository from '../interface/IRepository';
import NullRepository from './NullRepository';

export default class NullUnitOfWork implements IUnitOfWork {
  public static Singleton: IUnitOfWork = new NullUnitOfWork();

  // region Constructors

  private constructor() {}

  // endregion

  // region Public Properties

  public Clients: IRepository<Client> = this.CreateUowRepository<Client>(Tables.CLIENTS_TABLE);

  public Devices: IRepository<Device> = this.CreateUowRepository<Device>(Tables.DEVICES_TABLE);

  public Employees: IRepository<Employee> = this.CreateUowRepository<Employee>(Tables.EMPLOYEES_TABLE);

  public Orders: IRepository<Order> = this.CreateUowRepository<Order>(Tables.ORDERS_TABLE);

  public RequestLogs: IRepository<RequestLog> = this.CreateUowRepository<RequestLog>(Tables.REQUESTS_LOGS_TABLE);

  public UserLogs: IRepository<UserLog> = this.CreateUowRepository<UserLog>(Tables.USERS_LOGS_TABLE);

  // endregion

  // region Helper Methods

  CreateUowRepository<T>(tableName: string): IRepository<T> {
    return new NullRepository<T>(tableName);
  }

  // endregion
}
