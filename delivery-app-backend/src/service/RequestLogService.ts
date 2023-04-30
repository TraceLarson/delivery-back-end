import { DeleteResultType, SelectResultType, UpdateResultType } from '@/util/types';
import IRequestLogService from './interface/IRequestLogService';
import IUnitOfWork from './interface/IUnitOfWork';
import NullUnitOfWork from './null/NullUnitOfWork';

export default class RequestLogService implements IRequestLogService {
  // region Constructors

  constructor(unitOfWork: IUnitOfWork) {
    this.RequestLogUnitOfWork = unitOfWork ?? NullUnitOfWork.Singleton;
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

  public async AddRequestLog<RequestLog>(requestLog: RequestLog): Promise<InsertResultType> {
    return await this.RequestLogUnitOfWork.RequestLogs.Add<RequestLog>(requestLog);
  }

  public async FindAll<RequestLog>(): Promise<SelectResultType<RequestLog | null>> {
    return await this.RequestLogUnitOfWork.RequestLogs.FindAll<RequestLog>();
  }

  public async FindByRecordId<RequestLog>(recordId: string): Promise<SelectResultType<RequestLog | null>> {
    return await this.RequestLogUnitOfWork.RequestLogs.FindUnique<RequestLog>(recordId);
  }

  public async RemoveRequestLog<RequestLog>(recordId: string): Promise<DeleteResultType<RequestLog | null>> {
    return await this.RequestLogUnitOfWork.RequestLogs.Remove<RequestLog>(recordId);
  }

  public async UpdateRequestLog<RequestLog>(requestLog: RequestLog): Promise<UpdateResultType<RequestLog | null>> {
    return await this.RequestLogUnitOfWork.RequestLogs.Update<RequestLog>(requestLog);
  }

  // endregion
}
