import { SelectResultType } from '@/util/types';
import IRequestLogService from './interface/IRequestLogService';
import IUnitOfWork from './interface/IUnitOfWork';
import NullUnitOfWork from './null/NullUnitOfWork';

export default class RequestLogService implements IRequestLogService {
  // region Constructors

  constructor(unitOfWork: IUnitOfWork) {
    this.RequestLogUnitOfWork = unitOfWork;
  }

  // endregion

  // region Public Properties

  public get RequestLogUnitOfWork(): IUnitOfWork {
    return this._RequestLogUnitOfWork;
  }

  public set RequestLogUnitOfWork(value: IUnitOfWork) {
    this._RequestLogUnitOfWork = value;
  }

  // endregion

  // region Private Properties

  private _RequestLogUnitOfWork: IUnitOfWork = NullUnitOfWork.Singleton;

  // endregion

  // region Behavior

  public async FindAll<RequestLog>(): Promise<SelectResultType<RequestLog>> {
    return this.RequestLogUnitOfWork.RequestLogs.FindAll<RequestLog>();
  }

  public FindByRecordId<RequestLog>(RecordId: string): Promise<SelectResultType<RequestLog>> {
    return this.RequestLogUnitOfWork.RequestLogs.FindUnique<RequestLog>(RecordId);
  }

  // endregion
}
