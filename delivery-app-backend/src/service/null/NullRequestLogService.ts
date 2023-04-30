import RequestLog from '@/domain/implementation/RequestLog';
import IRequestLogService from '../interface/IRequestLogService';
import { SelectResultType } from '@/util/types';

export default class NullRequestLogService implements IRequestLogService {
  public static readonly Singleton: NullRequestLogService = new NullRequestLogService();

  // region Constructors

  private constructor() {}

  // endregion

  // region Properties

  // endregion

  // region Public Methods

  public async FindAll<RequestLog>(): Promise<SelectResultType<null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  public async FindByRecordId<RequestLog>(RecordId: string): Promise<SelectResultType<null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  // endregion
}
