import Employee from '@/domain/implementation/Employee';
import IEmployeeService from '../interface/IEmployeeService';
import { InsertResultType, DeleteResultType, SelectResultType, UpdateResultType } from '@/util/types';

export default class NullEmployeeService implements IEmployeeService {
  public static readonly Singleton: NullEmployeeService = new NullEmployeeService();

  // region Constructors

  private constructor() {}

  // endregion

  // region Properties

  // endregion

  // region Public Methods

  public async AddEmployee<Employee>(employee: Employee): Promise<InsertResultType> {
    return new Promise<InsertResultType>((resolve) => {
      resolve({} as InsertResultType);
    });
  }

  public async FindAll<Employee>(): Promise<SelectResultType<Employee | null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  public async FindByRecordId<Employee>(recordId: string): Promise<SelectResultType<Employee | null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  public async RemoveEmployee<Employee>(recordId: string): Promise<DeleteResultType<Employee | null>> {
    return new Promise<DeleteResultType<null>>((resolve) => {
      resolve({} as DeleteResultType<null>);
    });
  }

  public async UpdateEmployee<Employee>(employee: Employee, recordId: string): Promise<UpdateResultType<Employee | null>> {
    return new Promise<UpdateResultType<null>>((resolve) => {
      resolve({} as UpdateResultType<null>);
    });
  }

  // endregion
}
