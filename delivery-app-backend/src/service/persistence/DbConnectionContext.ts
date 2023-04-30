import Client from '@/domain/implementation/Client';
import Device from '@/domain/implementation/Device';
import Employee from '@/domain/implementation/Employee';
import Order from '@/domain/implementation/Order';
import RequestLog from '@/domain/implementation/RequestLog';
import UserLog from '@/domain/implementation/UserLog';
import { ClientColumns, DeviceColumns, EmployeeColumns, OrderColumns, RequestLogColumns, Tables, UserLogColumns } from '@/util/DBConstants';
import { TableHTMLAttributes } from 'react';
import { ConnectionContext } from '../../util/types';

export default class DbConnectionContext<T> {
  // region Constructors

  constructor() {
    this.Entity = {} as T;
    this.Columns = this.GetDbColumns<T>();
    this.Table = this.GetTableName<T>();
  }

  // endregion

  // region Public Properties

  public ConnectionContext: any;

  // endregion

  // region Private Properties

  private Entity: T;

  public Table: string;

  public Columns: string[];

  // endregion

  // region Helper Methods

  private GetDbColumns<T>(): string[] {
    switch (this.Entity) {
      case Client:
        return ClientColumns;
      case Device:
        return DeviceColumns;
      case Employee:
        return EmployeeColumns;
      case Order:
        return OrderColumns;
      case RequestLog:
        return RequestLogColumns;
      case UserLog:
      default:
        return UserLogColumns;
    }
  }

  private GetTableName<T>(): Tables {
    switch (this.Entity) {
      case Client:
        return Tables.CLIENTS_TABLE;
      case Device:
        return Tables.DEVICES_TABLE;
      case Employee:
        return Tables.EMPLOYEES_TABLE;
      case Order:
        return Tables.ORDERS_TABLE;
      case RequestLog:
        return Tables.REQUESTS_LOGS_TABLE;
      case UserLog:
      default:
        return Tables.USERS_LOGS_TABLE;
    }
  }

  // endregion
}
