import UserLog from '@/domain/implementation/UserLog';
import IUserLogService from '../interface/IUserLogService';
import { SelectResultType } from '@/util/types';

export default class NullUserLogService implements IUserLogService {
  public static readonly Singleton: NullUserLogService = new NullUserLogService();

  // region Constructors

  private constructor() {}

  // endregion

  // region Properties

  // endregion

  // region Public Methods

  public async FindAll<UserLog>(): Promise<SelectResultType<null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  public async FindByRecordId<UserLog>(RecordId: string): Promise<SelectResultType<null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  // endregion
}
