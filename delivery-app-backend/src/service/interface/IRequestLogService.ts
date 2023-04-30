import RequestLog from '@/domain/implementation/RequestLog';
import { InsertResultType, SelectResultType, UpdateResultType } from '@/util/types';
import { DeleteResultType } from '../../util/types';

export default interface IRequestLogService {
  // region Behavior

  AddRequestLog<RequestLog>(requestLog: RequestLog): Promise<InsertResultType>;

  FindAll<RequestLog>(): Promise<SelectResultType<RequestLog | null>>;

  FindByRecordId<RequestLog>(recordId: string): Promise<SelectResultType<RequestLog | null>>;

  RemoveRequestLog<RequestLog>(recordId: string): Promise<DeleteResultType<RequestLog | null>>;

  UpdateRequestLog<RequestLog>(requestLog: RequestLog): Promise<UpdateResultType<RequestLog | null>>;

  // endregion
}
