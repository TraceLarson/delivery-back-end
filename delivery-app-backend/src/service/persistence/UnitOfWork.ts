import OperationStringBuilder from '@/builder/OperationStringBuilder';
import QueryStringBuilder from '@/builder/QueryStringBuilder';
import Client from '@/domain/implementation/Client';
import Employee from '@/domain/implementation/Employee';
import { Operations, Tables, EmployeeColumns, ClientColumns, requestOptions } from '@/util/DBConstants';
import { AddResultType, ConnectionContext, InsertResultType } from '../../util/types';
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

  Clients: IRepository<Client> = this.CreateUowRepository<Client>();

  Devices: IRepository<Device> = this.CreateUowRepository<any>();

  Employees: IRepository<Employee> = this.CreateUowRepository<Employee>();

  Orders: IRepository<Order> = this.CreateUowRepository<Order>();

  RequestLogs: IRepository<RequestLog> = this.CreateUowRepository<RequestLog>();

  UserLogs: IRepository<UserLog> = this.CreateUowRepository<UserLog>();

  // endregion

  // region Behavior

  CreateUowRepository<T>(): IRepository<T> {
    return new Repository<T>(new DbConnectionContext<T>() as ConnectionContext);
  }

  // endregion
}
