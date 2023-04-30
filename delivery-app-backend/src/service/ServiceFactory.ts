import ClientService from './ClientService';
import DeviceService from './DeviceService';
import EmployeeService from './EmployeeService';
import OrderService from './OrderService';
import RequestLogService from './RequestLogService';
import UserLogService from './UserLogService';
import IClientService from './interface/IClientService';
import IDeviceService from './interface/IDeviceService';
import IEmployeeService from './interface/IEmployeeService';
import IOrderService from './interface/IOrderService';
import IRequestLogService from './interface/IRequestLogService';
import IUnitOfWork from './interface/IUnitOfWork';
import IUserLogService from './interface/IUserLogService';
import NullServiceFactory from './null/NullServiceFactory';

export default class ServiceFactory extends NullServiceFactory {
  // region Constructors
  constructor() {
    super();
  }

  // endregion

  // region Device

  override CreateDeviceService(unitOfWork: IUnitOfWork): IDeviceService {
    return new DeviceService(unitOfWork);
  }

  // endregion

  // region Request

  override CreateOrderService(unitOfWork: IUnitOfWork): IOrderService {
    return new OrderService(unitOfWork);
  }

  override CreateRequestLogService(unitOfWork: IUnitOfWork): IRequestLogService {
    return new RequestLogService(unitOfWork);
  }

  // endregion

  // region User

  override CreateClientService(unitOfWork: IUnitOfWork): IClientService {
    return new ClientService(unitOfWork);
  }

  override CreateEmployeeService(unitOfWork: IUnitOfWork): IEmployeeService {
    return new EmployeeService(unitOfWork);
  }

  override CreateUserLogService(unitOfWork: IUnitOfWork): IUserLogService {
    return new UserLogService(unitOfWork);
  }

  // endregion
}
