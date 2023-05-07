import { InsertResultType, SelectResultType, UpdateResultType } from '@/util/types';
import { DeleteResultType } from '../../util/types';

export default interface IEmployeeService {
  // region Behavior

  AddEmployee<Employee>(employee: Employee): Promise<InsertResultType>;

  FindAll<Employee>(): Promise<SelectResultType<Employee>>;

  FindByRecordId<Employee>(recordId: string): Promise<SelectResultType<Employee>>;

  RemoveEmployee<Employee>(recordId: string): Promise<DeleteResultType<Employee>>;

  UpdateEmployee<Employee>(employee: Employee, recordId: string): Promise<UpdateResultType<Employee>>;

  // endregion
}
