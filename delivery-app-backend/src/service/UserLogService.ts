import IUserLogService from './interface/IUserLogService';
import IUnitOfWork from './interface/IUnitOfWork';
import NullUnitOfWork from './null/NullUnitOfWork';
import { SelectResultType } from '@/util/types';

export default class UserLogService implements IUserLogService {
  // region Constructors

  constructor(unitOfWork: IUnitOfWork) {
    this.UserLogUnitOfWork = unitOfWork;
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

  public async FindAll<UserLog>(): Promise<SelectResultType<UserLog>> {
    return this.UserLogUnitOfWork.UserLogs.FindAll<UserLog>();
  }

  public FindByRecordId<UserLog>(RecordId: string): Promise<SelectResultType<UserLog>> {
    return this.UserLogUnitOfWork.UserLogs.FindUnique<UserLog>(RecordId);
  }

  // endregion
}
