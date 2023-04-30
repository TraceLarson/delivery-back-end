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

  constructor(table: Tables) {
    this.Columns = this.GetDbColumns<T>(table);
    this.Table = table;
  }

  // endregion

  // region Public Properties

  public ConnectionContext: any;

  // endregion

  // region Private Properties

  public Table: string;

  public Columns: string[];

  // endregion

  // region Helper Methods

  private GetDbColumns<T>(table: Tables): string[] {
    switch (table) {
      case Tables.CLIENTS_TABLE:
        return ClientColumns;
      case Tables.DEVICES_TABLE:
        return DeviceColumns;
      case Tables.EMPLOYEES_TABLE:
        return EmployeeColumns;
      case Tables.ORDERS_TABLE:
        return OrderColumns;
      case Tables.REQUESTS_LOGS_TABLE:
        return RequestLogColumns;
      case Tables.USERS_LOGS_TABLE:
      default:
        return UserLogColumns;
    }
  }

  // endregion
}
