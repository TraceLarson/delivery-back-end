import RequestLog from '@/domain/implementation/RequestLog';
import IRequestLogService from '../interface/IRequestLogService';
import { InsertResultType, DeleteResultType, SelectResultType, UpdateResultType } from '@/util/types';

export default class NullRequestLogService implements IRequestLogService {
  public static readonly Singleton: NullRequestLogService = new NullRequestLogService();

  // region Constructors

  private constructor() {}

  // endregion

  // region Properties

  // endregion

  // region Public Methods

  public async AddRequestLog<RequestLog>(requestLog: RequestLog): Promise<InsertResultType> {
    return new Promise<InsertResultType>((resolve) => {
      resolve({} as InsertResultType);
    });
  }

  public async FindByrecordId<RequestLog>(recordId: string): Promise<SelectResultType<RequestLog | null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  public async FindAll<RequestLog>(): Promise<SelectResultType<RequestLog | null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  public async FindByRecordId<RequestLog>(RecordId: string): Promise<SelectResultType<null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  public async RemoveRequestLog<RequestLog>(recordId: string): Promise<DeleteResultType<RequestLog | null>> {
    return new Promise<DeleteResultType<null>>((resolve) => {
      resolve({} as DeleteResultType<null>);
    });
  }

  public async UpdateRequestLog<RequestLog>(requestLog: RequestLog): Promise<UpdateResultType<RequestLog | null>> {
    return new Promise<UpdateResultType<null>>((resolve) => {
      resolve({} as UpdateResultType<null>);
    });
  }

  // endregion
}
