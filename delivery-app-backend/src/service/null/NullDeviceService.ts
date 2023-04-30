import Device from '@/domain/implementation/Device';
import IDeviceService from '../interface/IDeviceService';
import { SelectResultType } from '@/util/types';

export default class NullDeviceService implements IDeviceService {
  public static readonly Singleton: IDeviceService = new NullDeviceService();

  // region Constructors

  private constructor() {}

  // endregion

  // region Properties

  // endregion

  // region Public Methods

  public async FindAll<Device>(): Promise<SelectResultType<Device | null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  public async FindByRecordId<Device>(RecordId: string): Promise<SelectResultType<Device | null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  // endregion
}
