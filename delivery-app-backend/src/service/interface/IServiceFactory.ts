import UnitOfWork from '../persistence/UnitOfWork';
import IClientService from './IClientService';
import IDeviceService from './IDeviceService';
import IEmployeeService from './IEmployeeService';
import IOrderService from './IOrderService';
import IRequestLogService from './IRequestLogService';
import IUnitOfWork from './IUnitOfWork';
import IUserLogService from './IUserLogService';

export default interface IServiceFactory {
  // region Behavior

  CreateClientService(UnitOfWork: IUnitOfWork): IClientService;

  CreateDeviceService(UnitOfWork: IUnitOfWork): IDeviceService;

  CreateEmployeeService(UnitOfWork: IUnitOfWork): IEmployeeService;

  CreateOrderService(UnitOfWork: IUnitOfWork): IOrderService;

  CreateRequestLogService(UnitOfWork: IUnitOfWork): IRequestLogService;

  CreateUserLogService(UnitOfWork: IUnitOfWork): IUserLogService;

  // endregion
}
