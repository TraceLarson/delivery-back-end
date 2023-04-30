import { DeleteResultType, InsertResultType, SelectResultType, UpdateResultType } from '@/util/types';
import IDeviceService from './interface/IDeviceService';
import IUnitOfWork from './interface/IUnitOfWork';
import NullUnitOfWork from './null/NullUnitOfWork';

export default class DeviceService implements IDeviceService {
  // region Constructors

  constructor(unitOfWork: IUnitOfWork) {
    this.DeviceUnitOfWork = unitOfWork;
  }

  // endregion

  // region Public Properties

  public get DeviceUnitOfWork(): IUnitOfWork {
    return this._DeviceUnitOfWork;
  }

  public set DeviceUnitOfWork(value: IUnitOfWork) {
    this._DeviceUnitOfWork = value;
  }

  // endregion

  // region Private Properties

  private _DeviceUnitOfWork: IUnitOfWork = NullUnitOfWork.Singleton;

  // endregion

  // region Behavior

  public async AddDevice<Device>(device: Device): Promise<InsertResultType> {
    return await this.DeviceUnitOfWork.Devices.Add<Device>(device);
  }

  public async FindAll<Device>(): Promise<SelectResultType<Device | null>> {
    return await this.DeviceUnitOfWork.Devices.FindAll<Device>();
  }

  public async FindByRecordId<Device>(recordId: string): Promise<SelectResultType<Device | null>> {
    return await this.DeviceUnitOfWork.Devices.FindUnique<Device>(recordId);
  }

  public async RemoveDevice<Device>(recordId: string): Promise<DeleteResultType<Device | null>> {
    return await this.DeviceUnitOfWork.Devices.Remove<Device>(recordId);
  }

  public async UpdateDevice<Device>(device: Device): Promise<UpdateResultType<Device | null>> {
    return await this.DeviceUnitOfWork.Devices.Update<Device>(device);
  }

  // endregion
}
