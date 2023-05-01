import IUserLogService from './interface/IUserLogService';
import IUnitOfWork from './interface/IUnitOfWork';
import NullUnitOfWork from './null/NullUnitOfWork';
import { DeleteResultType, InsertResultType, SelectResultType, UpdateResultType } from '@/util/types';
import AbstractService from './AbstractService';

export default class UserLogService extends AbstractService implements IUserLogService {
  // region Constructors

  constructor(unitOfWork: IUnitOfWork) {
    super(unitOfWork);
    this.unitOfWork = unitOfWork ?? NullUnitOfWork.Singleton;
  }

  // endregion

  // region Behavior

  public async AddUserLog<UserLog>(userLog: UserLog): Promise<InsertResultType> {
    return await this.unitOfWork.UserLogs.Add<UserLog>(userLog);
  }

  public async FindAll<UserLog>(): Promise<SelectResultType<UserLog | null>> {
    return await this.unitOfWork.UserLogs.FindAll<UserLog>();
  }

  public async FindByRecordId<UserLog>(recordId: string): Promise<SelectResultType<UserLog | null>> {
    return await this.unitOfWork.UserLogs.FindUnique<UserLog>(recordId);
  }

  public async RemoveUserLog<UserLog>(recordId: string): Promise<DeleteResultType<UserLog | null>> {
    return await this.unitOfWork.UserLogs.Remove<UserLog>(recordId);
  }

  public async UpdateUserLog<UserLog>(userLog: UserLog, recordId: string): Promise<UpdateResultType<UserLog | null>> {
    return await this.unitOfWork.UserLogs.Update<UserLog>(userLog, recordId);
  }

  // endregion
}
