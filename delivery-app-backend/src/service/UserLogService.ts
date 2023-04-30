import IUserLogService from './interface/IUserLogService';
import IUnitOfWork from './interface/IUnitOfWork';
import NullUnitOfWork from './null/NullUnitOfWork';
import { DeleteResultType, InsertResultType, SelectResultType, UpdateResultType } from '@/util/types';

export default class UserLogService implements IUserLogService {
  // region Constructors

  constructor(unitOfWork: IUnitOfWork) {
    this.UserLogUnitOfWork = unitOfWork ?? NullUnitOfWork.Singleton;
  }

  // endregion

  // region Public Properties

  public get UserLogUnitOfWork(): IUnitOfWork {
    return this._UserLogUnitOfWork;
  }

  public set UserLogUnitOfWork(value: IUnitOfWork) {
    this._UserLogUnitOfWork = value;
  }

  // endregion

  // region Private Properties

  private _UserLogUnitOfWork: IUnitOfWork = NullUnitOfWork.Singleton;

  // endregion

  // region Behavior

  public async AddUserLog<UserLog>(userLog: UserLog): Promise<InsertResultType> {
    return await this.UserLogUnitOfWork.UserLogs.Add<UserLog>(userLog);
  }

  public async FindAll<UserLog>(): Promise<SelectResultType<UserLog | null>> {
    return await this.UserLogUnitOfWork.UserLogs.FindAll<UserLog>();
  }

  public async FindByRecordId<UserLog>(recordId: string): Promise<SelectResultType<UserLog | null>> {
    return await this.UserLogUnitOfWork.UserLogs.FindUnique<UserLog>(recordId);
  }

  public async RemoveUserLog<UserLog>(recordId: string): Promise<DeleteResultType<UserLog | null>> {
    return await this.UserLogUnitOfWork.UserLogs.Remove<UserLog>(recordId);
  }

  public async UpdateUserLog<UserLog>(userLog: UserLog): Promise<UpdateResultType<UserLog | null>> {
    return await this.UserLogUnitOfWork.UserLogs.Update<UserLog>(userLog);
  }

  // endregion
}
