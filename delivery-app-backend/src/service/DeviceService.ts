import { DeleteResultType, InsertResultType, SelectResultType, UpdateResultType } from '@/util/types';
import IDeviceService from './interface/IDeviceService';
import IUnitOfWork from './interface/IUnitOfWork';
import AbstractService from './AbstractService';

export default class DeviceService extends AbstractService implements IDeviceService {
  // region Constructors

  constructor(unitOfWork: IUnitOfWork) {
    super(unitOfWork);
  }

  // endregion

  // region Behavior

  public async AddDevice<Device>(device: Device): Promise<InsertResultType> {
    return await this.unitOfWork.Devices.Add<Device>(device);
  }

  public async FindAll<Device>(): Promise<SelectResultType<Device | null>> {
    return await this.unitOfWork.Devices.FindAll<Device>();
  }

  public async FindByRecordId<Device>(recordId: string): Promise<SelectResultType<Device | null>> {
    return await this.unitOfWork.Devices.FindUnique<Device>(recordId);
  }

  public async RemoveDevice<Device>(recordId: string): Promise<DeleteResultType<Device | null>> {
    return await this.unitOfWork.Devices.Remove<Device>(recordId);
  }

  public async UpdateDevice<Device>(device: Device, recordId: string): Promise<UpdateResultType<Device | null>> {
    return await this.unitOfWork.Devices.Update<Device>(device, recordId);
  }

  // endregion
}
