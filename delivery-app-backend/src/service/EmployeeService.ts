import { DeleteResultType, InsertResultType, SelectResultType, UpdateResultType } from '@/util/types';
import IEmployeeService from './interface/IEmployeeService';
import IUnitOfWork from './interface/IUnitOfWork';
import NullUnitOfWork from './null/NullUnitOfWork';

export default class EmployeeService implements IEmployeeService {
  // region Constructors

  constructor(unitOfWork: IUnitOfWork) {
    this.EmployeeUnitOfWork = unitOfWork ?? NullUnitOfWork.Singleton;
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

  public async AddEmployee<Employee>(employee: Employee): Promise<InsertResultType> {
    return await this.EmployeeUnitOfWork.Employees.Add<Employee>(employee);
  }

  public async FindAll<Employee>(): Promise<SelectResultType<Employee | null>> {
    return await this.EmployeeUnitOfWork.Employees.FindAll<Employee>();
  }

  public async FindByRecordId<Employee>(recordId: string): Promise<SelectResultType<Employee | null>> {
    return await this.EmployeeUnitOfWork.Employees.FindUnique<Employee>(recordId);
  }

  public async RemoveEmployee<Employee>(recordId: string): Promise<DeleteResultType<Employee | null>> {
    return await this.EmployeeUnitOfWork.Employees.Remove<Employee>(recordId);
  }

  public async UpdateEmployee<Employee>(employee: Employee, recordId: string): Promise<UpdateResultType<Employee | null>> {
    return await this.EmployeeUnitOfWork.Employees.Update<Employee>(employee, recordId);
  }

  // endregion
}
