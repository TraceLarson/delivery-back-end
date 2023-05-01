import { DeleteResultType, InsertResultType, SelectResultType, UpdateResultType } from '@/util/types';
import IEmployeeService from './interface/IEmployeeService';
import IUnitOfWork from './interface/IUnitOfWork';
import AbstractService from './AbstractService';

export default class EmployeeService extends AbstractService implements IEmployeeService {
  // region Constructors

  constructor(unitOfWork: IUnitOfWork) {
    super(unitOfWork);
  }

  // endregion

  // region Behavior

  public async AddEmployee<Employee>(employee: Employee): Promise<InsertResultType> {
    return await this.unitOfWork.Employees.Add<Employee>(employee);
  }

  public async FindAll<Employee>(): Promise<SelectResultType<Employee | null>> {
    return await this.unitOfWork.Employees.FindAll<Employee>();
  }

  public async FindByRecordId<Employee>(recordId: string): Promise<SelectResultType<Employee | null>> {
    return await this.unitOfWork.Employees.FindUnique<Employee>(recordId);
  }

  public async RemoveEmployee<Employee>(recordId: string): Promise<DeleteResultType<Employee | null>> {
    return await this.unitOfWork.Employees.Remove<Employee>(recordId);
  }

  public async UpdateEmployee<Employee>(employee: Employee, recordId: string): Promise<UpdateResultType<Employee | null>> {
    return await this.unitOfWork.Employees.Update<Employee>(employee, recordId);
  }

  // endregion
}
