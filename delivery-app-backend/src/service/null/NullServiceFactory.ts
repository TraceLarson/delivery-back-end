import IClientService from '../interface/IClientService';
import IDeviceService from '../interface/IDeviceService';
import IEmployeeService from '../interface/IEmployeeService';
import IOrderService from '../interface/IOrderService';
import IRequestLogService from '../interface/IRequestLogService';
import IServiceFactory from '../interface/IServiceFactory';
import IUnitOfWork from '../interface/IUnitOfWork';
import IUserLogService from '../interface/IUserLogService';
import NullClientService from './NullClientService';
import NullDeviceService from './NullDeviceService';
import NullEmployeeService from './NullEmployeeService';
import NullOrderService from './NullOrderService';
import NullRequestLogService from './NullRequestLogService';
import NullUserLogService from './NullUserLogService';

export default class NullServiceFactory implements IServiceFactory {
  // region Constructors

  public constructor() {}

  // endregion

  // region Device

  CreateDeviceService(unitOfWork: IUnitOfWork): IDeviceService {
    return NullDeviceService.Singleton;
  }

  // endregion

  // region Request

  CreateOrderService(unitOfWork: IUnitOfWork): IOrderService {
    return NullOrderService.Singleton;
  }

  CreateRequestLogService(unitOfWork: IUnitOfWork): IRequestLogService {
    return NullRequestLogService.Singleton;
  }

  // endregion

  // region User

  CreateClientService(unitOfWork: IUnitOfWork): IClientService {
    return NullClientService.Singleton;
  }

  CreateEmployeeService(unitOfWork: IUnitOfWork): IEmployeeService {
    return NullEmployeeService.Singleton;
  }

  CreateUserLogService(unitOfWork: IUnitOfWork): IUserLogService {
    return NullUserLogService.Singleton;
  }

  // endregion
}
