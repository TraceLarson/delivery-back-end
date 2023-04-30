import { InsertResultType, SelectResultType, UpdateResultType } from '@/util/types';
import { DeleteResultType } from '../../util/types';

export default interface IEmployeeService {
  // region Behavior

  AddEmployee<Employee>(employee: Employee): Promise<InsertResultType>;

  FindAll<Employee>(): Promise<SelectResultType<Employee | null>>;

  FindByRecordId<Employee>(recordId: string): Promise<SelectResultType<Employee | null>>;

  RemoveEmployee<Employee>(recordId: string): Promise<DeleteResultType<Employee | null>>;

  UpdateEmployee<Employee>(employee: Employee): Promise<UpdateResultType<Employee | null>>;

  // endregion
}
