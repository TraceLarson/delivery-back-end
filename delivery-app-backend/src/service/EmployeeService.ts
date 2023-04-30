import { SelectResultType } from '@/util/types';
import IEmployeeService from './interface/IEmployeeService';
import IUnitOfWork from './interface/IUnitOfWork';
import NullUnitOfWork from './null/NullUnitOfWork';

export default class EmployeeService implements IEmployeeService {
  // region Constructors

  constructor(unitOfWork: IUnitOfWork) {
    this.EmployeeUnitOfWork = unitOfWork;
  }

  // endregion

  // region Public Properties

  public get EmployeeUnitOfWork(): IUnitOfWork {
    return this._EmployeeUnitOfWork;
  }

  public set EmployeeUnitOfWork(value: IUnitOfWork) {
    this._EmployeeUnitOfWork = value;
  }

  // endregion

  // region Private Properties

  private _EmployeeUnitOfWork: IUnitOfWork = NullUnitOfWork.Singleton;

  // endregion

  // region Behavior

  public async FindAll<Employee>(): Promise<SelectResultType<Employee>> {
    return this.EmployeeUnitOfWork.Employees.FindAll<Employee>();
  }

  public FindByRecordId<Employee>(RecordId: string): Promise<SelectResultType<Employee>> {
    return this.EmployeeUnitOfWork.Employees.FindUnique<Employee>(RecordId);
  }

  // endregion
}
