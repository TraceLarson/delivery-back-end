import { OperationType, SqlStatementType } from '../../types';

export const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', 'Basic bG9uZWx5ejpIYWlsZXkwOT8=');

export const requestOptions = (operationString: OperationType): RequestInit => {
  return {
    method: 'POST',
    headers: myHeaders,
    body: operationString,
    redirect: 'follow',
  };
};

export enum Tables {
  EMPLOYEES_TABLE = 'Users.Employees',
  CLIENTS_TABLE = 'Users.Clients',
  DEVICES_TABLE = 'Users.Devices',
  USERS_LOGS_TABLE = 'Users.Logs',
  ORDERS_TABLE = 'Requests.Orders',
  REQUESTS_LOGS_TABLE = 'Requests.Logs',
}

export enum Operations {
  SQL = 'sql',
  CREATE_SCHEMA = 'create_schema',
  CREATE_TABLE = 'create_table',
  INSERT_RECORD = 'insert',
  UPDATE_RECORD = 'update',
  BULK_INSERT = 'csv_url_load',
}

export const EmployeeColumns: string[] = ['firstName', 'lastName', 'email', 'password', 'city', 'state', 'zipCode'];
export const ClientColumns: string[] = ['firstName', 'lastName', 'email', 'password', 'city', 'state', 'zipCode'];
