import OperationStringBuilder from '@/builder/OperationStringBuilder';
import QueryStringBuilder from '@/builder/QueryStringBuilder';
import IRepository from '@/service/interface/IRepository';
import { Operations, requestOptions } from '@/util/DBConstants';
import { AddResultType, ConnectionContext, DeleteResultType, InsertResultType, UpdateResultType } from '@/util/types';
import { SelectResultType } from '../../util/types';

export default class Repository<T> implements IRepository<T> {
  // region Constructors

  public constructor(context: ConnectionContext) {
    this.Context = context;
  }

  // endregion

  // region Properties

  Context: ConnectionContext;

  // endregion

  // region Public Methods

  public async Add<T>(entity: T): Promise<InsertResultType> {
    const queryString = QueryStringBuilder.buildInsertQuery<T>(this.Context.Table, this.Context.Columns, entity);
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

  public async FindAll<T>(): Promise<SelectResultType<T>> {
    const queryString = QueryStringBuilder.buildSelectQuery<T>(this.Context.Table, this.Context.Columns);
    const operationString: string = new OperationStringBuilder(Operations.SQL, queryString).Build();

    return await fetch(`${process.env.BASEURL}`, requestOptions(operationString))
      .then((response) => response.text())
      .then((result) => {
        const parsedResult: T[] = JSON.parse(result);
        return { status: 201, result: parsedResult, error: null };
      })
      .catch((error) => {
        console.log('error', error);
        return { status: 500, result: null, error: error };
      });
  }

  public async FindUnique<T>(recordId: string): Promise<SelectResultType<T>> {
    const queryString = QueryStringBuilder.buildFindByRecordId<T>(this.Context.Table, this.Context.Columns, recordId);
    const operationString: string = new OperationStringBuilder(Operations.SQL, queryString).Build();

    return await fetch(`${process.env.BASEURL}`, requestOptions(operationString))
      .then((response) => response.text())
      .then((result) => {
        const parsedResult: T[] = JSON.parse(result);
        return { status: 201, result: parsedResult, error: null };
      })
      .catch((error) => {
        console.log('error', error);
        return { status: 500, result: null, error: error };
      });
  }

  public async Remove<T>(recordId: string): Promise<DeleteResultType<T>> {
    const queryString = QueryStringBuilder.buildDeleteQuery<T>(this.Context.Table, this.Context.Columns, recordId);
    const operationString: string = new OperationStringBuilder(Operations.SQL, queryString).Build();

    return await fetch(`${process.env.BASEURL}`, requestOptions(operationString))
      .then((response) => response.text())
      .then((result) => {
        const parsedResult: any = JSON.parse(result);
        return { status: 201, result: parsedResult, error: null };
      })
      .catch((error) => {
        console.log('error', error);
        return { status: 500, result: null, error: error };
      });
  }

  public async Update<T>(entity: T, recordId: string): Promise<UpdateResultType<T>> {
    const queryString = QueryStringBuilder.buildUpdateQuery<T>(this.Context.Table, this.Context.Columns, entity, recordId);
    const operationString: string = new OperationStringBuilder(Operations.SQL, queryString).Build();

    return await fetch(`${process.env.BASEURL}`, requestOptions(operationString))
      .then((response) => response.text())
      .then((result) => {
        const parsedResult: any = JSON.parse(result);
        return { status: 201, result: parsedResult, error: null };
      })
      .catch((error) => {
        console.log('error', error);
        return { status: 500, result: null, error: error };
      });
  }

  // endregion
}
