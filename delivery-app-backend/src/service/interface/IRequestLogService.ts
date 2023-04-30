import RequestLog from '@/domain/implementation/RequestLog';
import { SelectResultType } from '@/util/types';

export default interface IRequestLogService {
  // region Behavior

  FindAll<RequestLog>(): Promise<SelectResultType<RequestLog | null>>;

  FindByRecordId<RequestLog>(RecordId: string): Promise<SelectResultType<RequestLog | null>>;

  // endregion
}
