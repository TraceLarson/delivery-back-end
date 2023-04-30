import { SelectResultType } from '@/util/types';

export default interface IUserLogService {
  // region Behavior

  FindAll<UserLog>(): Promise<SelectResultType<UserLog | null>>;

  FindByRecordId<UserLog>(RecordId: string): Promise<SelectResultType<UserLog | null>>;

  // endregion
}
