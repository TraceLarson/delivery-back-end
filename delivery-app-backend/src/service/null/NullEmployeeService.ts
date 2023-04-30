import Employee from '@/domain/implementation/Employee';
import IEmployeeService from '../interface/IEmployeeService';
import { SelectResultType } from '@/util/types';

export default class NullEmployeeService implements IEmployeeService {
  public static readonly Singleton: NullEmployeeService = new NullEmployeeService();

  // region Constructors

  private constructor() {}

  // endregion

  // region Properties

  // endregion

  // region Public Methods

  public async FindAll<Employee>(): Promise<SelectResultType<Employee | null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  public async FindByRecordId<Employee>(RecordId: string): Promise<SelectResultType<Employee | null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  // endregion
}
