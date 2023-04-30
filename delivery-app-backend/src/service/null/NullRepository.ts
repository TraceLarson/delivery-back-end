import IRepository from '@/service/interface/IRepository';
import { InsertResultType, SelectResultType } from '@/util/types';
export default class NullRepository<T> implements IRepository<T> {
  // region Constructors

  public constructor(tableName: string) {
    this.TableName = tableName;
  }

  // endregion

  // region Public Properties

  public TableName: string = '';

  // endregion

  // region Behavior

  Add<T>(entity: T): Promise<InsertResultType> {
    throw new Error('Method not implemented.');
  }

  FindAll<T>(): Promise<SelectResultType<T>> {
    throw new Error('Method not implemented.');
  }

  FindUnique<T>(RecordId: string): Promise<SelectResultType<T>> {
    throw new Error('Method not implemented.');
  }

  Remove<T>(RecordId: string): Promise<T> {
    throw new Error('Method not implemented.');
  }

  Update<T>(entity: T): Promise<T> {
    throw new Error('Method not implemented.');
  }

  // endregion
}
