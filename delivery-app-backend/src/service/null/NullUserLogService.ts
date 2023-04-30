import UserLog from '@/domain/implementation/UserLog';
import IUserLogService from '../interface/IUserLogService';
import { InsertResultType, DeleteResultType, SelectResultType, UpdateResultType } from '@/util/types';

export default class NullUserLogService implements IUserLogService {
  public static readonly Singleton: NullUserLogService = new NullUserLogService();

  // region Constructors

  private constructor() {}

  // endregion

  // region Properties

  // endregion

  // region Public Methods

  public async AddUserLog<UserLog>(userLog: UserLog): Promise<InsertResultType> {
    return new Promise<InsertResultType>((resolve) => {
      resolve({} as InsertResultType);
    });
  }

  public async FindAll<UserLog>(): Promise<SelectResultType<UserLog | null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  public async FindByRecordId<UserLog>(recordId: string): Promise<SelectResultType<UserLog | null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  public async RemoveUserLog<UserLog>(recordId: string): Promise<DeleteResultType<UserLog | null>> {
    return new Promise<DeleteResultType<null>>((resolve) => {
      resolve({} as DeleteResultType<null>);
    });
  }

  public async UpdateUserLog<UserLog>(userLog: UserLog): Promise<UpdateResultType<UserLog | null>> {
    return new Promise<UpdateResultType<null>>((resolve) => {
      resolve({} as UpdateResultType<null>);
    });
  }

  // endregion
}
