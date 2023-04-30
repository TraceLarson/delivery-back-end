import { SelectResultType } from '@/util/types';

export default interface IEmployeeService {
  // region Behavior

  FindAll<Employee>(): Promise<SelectResultType<Employee | null>>;

  FindByRecordId<Employee>(RecordId: string): Promise<SelectResultType<Employee | null>>;

  // endregion
}
