import OperationStringBuilder from '@/builder/OperationStringBuilder';
import QueryStringBuilder from '@/builder/QueryStringBuilder';
import Client from '@/domain/implementation/Client';
import Employee from '@/domain/implementation/Employee';
import { Operations, Tables, EmployeeColumns, ClientColumns, requestOptions } from '@/util/DBConstants';
import { AddResultType, ClientType, ConnectionContext, InsertResultType } from '../../util/types';
import Repository from './Repository';
import IRepository from '@/service/interface/IRepository';
import IUnitOfWork from '../interface/IUnitOfWork';
import Device from '@/domain/implementation/Device';
import RequestLog from '@/domain/implementation/RequestLog';
import UserLog from '@/domain/implementation/UserLog';
import Order from '@/domain/implementation/Order';
import DbConnectionContext from './DbConnectionContext';

export default class UnitOfWork implements IUnitOfWork {
  // region Constructors

  public constructor() {}

  // endregion

  // region Properties

  Clients: IRepository<Client> = this.CreateUowRepository<Client>(Tables.CLIENTS_TABLE);

  Devices: IRepository<Device> = this.CreateUowRepository<Device>(Tables.DEVICES_TABLE);

  Employees: IRepository<Employee> = this.CreateUowRepository<Employee>(Tables.EMPLOYEES_TABLE);

  Orders: IRepository<Order> = this.CreateUowRepository<Order>(Tables.ORDERS_TABLE);

  RequestLogs: IRepository<RequestLog> = this.CreateUowRepository<RequestLog>(Tables.REQUESTS_LOGS_TABLE);

  UserLogs: IRepository<UserLog> = this.CreateUowRepository<UserLog>(Tables.USERS_LOGS_TABLE);

  // endregion

  // region Behavior

  CreateUowRepository<T>(table: Tables): IRepository<T> {
    return new Repository<T>(new DbConnectionContext<T>(table) as ConnectionContext);
  }

  // endregion
}
