import Device from '@/domain/implementation/Device';
import IDeviceService from '../interface/IDeviceService';
import { InsertResultType, DeleteResultType, SelectResultType, UpdateResultType } from '@/util/types';

export default class NullDeviceService implements IDeviceService {
  public static readonly Singleton: IDeviceService = new NullDeviceService();

  // region Constructors

  private constructor() {}

  // endregion

  // region Properties

  // endregion

  // region Public Methods

  public async AddDevice<Device>(device: Device): Promise<InsertResultType> {
    return new Promise<InsertResultType>((resolve) => {
      resolve({} as InsertResultType);
    });
  }

  public async FindAll<Device>(): Promise<SelectResultType<Device | null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  public async FindByRecordId<Device>(recordId: string): Promise<SelectResultType<Device | null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  public async RemoveDevice<Device>(recordId: string): Promise<DeleteResultType<Device | null>> {
    return new Promise<DeleteResultType<null>>((resolve) => {
      resolve({} as DeleteResultType<null>);
    });
  }

  public async UpdateDevice<Device>(device: Device): Promise<UpdateResultType<Device | null>> {
    return new Promise<UpdateResultType<null>>((resolve) => {
      resolve({} as UpdateResultType<null>);
    });
  }
  // endregion
}
