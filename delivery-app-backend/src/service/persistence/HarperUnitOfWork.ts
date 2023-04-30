import Client from '@/domain/implementation/Client';
import Employee from '@/domain/implementation/Employee';
import IRepository from '@/service/interface/IRepository';
import IUnitOfWork from '../interface/IUnitOfWork';
import OperationStringBuilder from '@/builder/OperationStringBuilder';
import QueryStringBuilder from '@/builder/QueryStringBuilder';
import Repository from './Repository';
import { AddResultType, ConnectionContext, InsertResultType } from '../../util/types';
import { Operations, Tables, EmployeeColumns, ClientColumns, requestOptions } from '@/util/DBConstants';
import Device from '@/domain/implementation/Device';
import Order from '@/domain/implementation/Order';
import RequestLog from '@/domain/implementation/RequestLog';
import UserLog from '@/domain/implementation/UserLog';
import DbConnectionContext from './DbConnectionContext';

export default class HarperUnitOfWork implements IUnitOfWork {
  // region Constructors

  public constructor() {}

  // endregion

  // region Properties

  Clients: IRepository<Client> = this.CreateUowRepository<Client>();

  Devices: IRepository<Device> = this.CreateUowRepository<Device>();

  Employees: IRepository<Employee> = this.CreateUowRepository<Employee>();

  Orders: IRepository<Order> = this.CreateUowRepository<Order>();

  RequestLogs: IRepository<RequestLog> = this.CreateUowRepository<RequestLog>();

  UserLogs: IRepository<UserLog> = this.CreateUowRepository<UserLog>();

  // endregion

  // region Public Methods

  CreateUowRepository<T>(): IRepository<T> {
    return new Repository<T>(new DbConnectionContext<T>() as ConnectionContext);
  }

  // endregion
}
