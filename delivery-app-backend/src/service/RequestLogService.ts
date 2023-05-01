import { DeleteResultType, InsertResultType, SelectResultType, UpdateResultType } from '@/util/types';
import IRequestLogService from './interface/IRequestLogService';
import IUnitOfWork from './interface/IUnitOfWork';
import NullUnitOfWork from './null/NullUnitOfWork';
import AbstractService from './AbstractService';

export default class RequestLogService extends AbstractService implements IRequestLogService {
  // region Constructors

  constructor(unitOfWork: IUnitOfWork) {
    super(unitOfWork);
    this.unitOfWork = unitOfWork ?? NullUnitOfWork.Singleton;
  }

  // endregion

  // region Behavior

  public async AddRequestLog<RequestLog>(requestLog: RequestLog): Promise<InsertResultType> {
    return await this.unitOfWork.RequestLogs.Add<RequestLog>(requestLog);
  }

  public async FindAll<RequestLog>(): Promise<SelectResultType<RequestLog | null>> {
    return await this.unitOfWork.RequestLogs.FindAll<RequestLog>();
  }

  public async FindByRecordId<RequestLog>(recordId: string): Promise<SelectResultType<RequestLog | null>> {
    return await this.unitOfWork.RequestLogs.FindUnique<RequestLog>(recordId);
  }

  public async RemoveRequestLog<RequestLog>(recordId: string): Promise<DeleteResultType<RequestLog | null>> {
    return await this.unitOfWork.RequestLogs.Remove<RequestLog>(recordId);
  }

  public async UpdateRequestLog<RequestLog>(requestLog: RequestLog, recordId: string): Promise<UpdateResultType<RequestLog | null>> {
    return await this.unitOfWork.RequestLogs.Update<RequestLog>(requestLog, recordId);
  }

  // endregion
}
