import { ConnectionContext, DeleteResultType, InsertResultType, SelectResultType, UpdateResultType } from '@/util/types';

export default interface Repository<T> {
  // region Properties

  Context: ConnectionContext;

  // endregion

  // region Public Methods

  Add<T>(entity: T): Promise<InsertResultType>;

  FindAll<T>(): Promise<SelectResultType<T>>;

  FindUnique<T>(recordId: string): Promise<SelectResultType<T>>;

  Remove<T>(recordId: string): Promise<DeleteResultType<T>>;

  Update<T>(entity: T, recordId: string): Promise<UpdateResultType<T>>;

  // endregion
}
