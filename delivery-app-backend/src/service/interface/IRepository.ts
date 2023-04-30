import { ConnectionContext, InsertResultType, SelectResultType } from '@/util/types';

export default interface Repository<T> {
  // region Properties

  Context: ConnectionContext;

  // endregion

  // region Public Methods

  Add<T>(entity: T): Promise<InsertResultType>;

  FindAll<T>(): Promise<SelectResultType<T>>;

  FindUnique<T>(RecordId: string): Promise<SelectResultType<T>>;

  Remove<T>(RecordId: string): Promise<T>;

  Update<T>(entity: T): Promise<T>;

  // endregion
}
