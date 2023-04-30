import { SelectResultType } from '@/util/types';
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

  public async FindAll<Device>(): Promise<SelectResultType<Device>> {
    return this.DeviceUnitOfWork.Devices.FindAll<Device>();
  }

  public FindByRecordId<Device>(RecordId: string): Promise<SelectResultType<Device>> {
    return this.DeviceUnitOfWork.Devices.FindUnique<Device>(RecordId);
  }

  // endregion
}
