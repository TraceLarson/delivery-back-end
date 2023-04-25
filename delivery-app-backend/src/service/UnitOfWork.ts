import OperationStringBuilder from '@/builder/OperationStringBuilder';
import QueryStringBuilder from '@/builder/QueryStringBuilder';
import Client from '@/domain/implementation/Client';
import Employee from '@/domain/implementation/Employee';
import { Operations, Tables, EmployeeColumns, ClientColumns, requestOptions } from '@/util/DBConstants';
import { AddResultType, InsertResultType } from '../../types';

export default class UnitOfWork {
  // region Private Static Properties

  public static readonly Singleton: UnitOfWork = new UnitOfWork();

  // endregion

  // region Constructors

  private constructor() {}

  // endregion

  // region Public Methods

  //   public async getRepository<T>(entity: new () => T): Promise<Repository<T>> {
  //     return new Repository<T>(entity);
  //   }

  public async AddClient(client: Client): Promise<InsertResultType> {
    const queryString = QueryStringBuilder.buildInsertQuery<Client>(Tables.CLIENTS_TABLE, ClientColumns, client);
    const operationString: string = new OperationStringBuilder(Operations.SQL, queryString).Build();

    return await fetch(`${process.env.BASEURL}`, requestOptions(operationString))
      .then((response) => response.text())
      .then((result) => {
        const parsedResult: AddResultType = JSON.parse(result);
        return { status: 201, result: parsedResult, error: null };
      })
      .catch((error) => {
        console.log('error', error);
        return { status: 500, result: null, error: error };
      });
  }

  public async AddEmployee(employee: Employee): Promise<InsertResultType> {
    const queryString = QueryStringBuilder.buildInsertQuery<Employee>(Tables.EMPLOYEES_TABLE, EmployeeColumns, employee);
    const operationString: string = new OperationStringBuilder(Operations.SQL, queryString).Build();

    return await fetch(`${process.env.BASEURL}`, requestOptions(operationString))
      .then((response) => response.text())
      .then((result) => {
        const parsedResult: AddResultType = JSON.parse(result);
        return { status: 201, result: parsedResult, error: null };
      })
      .catch((error) => {
        console.log('error', error);
        return { status: 500, result: null, error: error };
      });
  }

  // endregion
}
