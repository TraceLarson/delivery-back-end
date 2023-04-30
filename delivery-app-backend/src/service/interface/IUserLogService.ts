import { InsertResultType, SelectResultType, UpdateResultType } from '@/util/types';
import { DeleteResultType } from '../../util/types';

export default interface IUserLogService {
  // region Behavior

  AddUserLog<UserLog>(userLog: UserLog): Promise<InsertResultType>;

  FindAll<UserLog>(): Promise<SelectResultType<UserLog | null>>;

  FindByRecordId<UserLog>(recordId: string): Promise<SelectResultType<UserLog | null>>;

  RemoveUserLog<UserLog>(recordId: string): Promise<DeleteResultType<UserLog | null>>;

  UpdateUserLog<UserLog>(userLog: UserLog): Promise<UpdateResultType<UserLog | null>>;

  // endregion
}
