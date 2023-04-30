import { SelectResultType } from '@/util/types';

export default interface IDeviceService {
  // region Behavior

  FindAll<Device>(): Promise<SelectResultType<Device | null>>;

  FindByRecordId<Device>(RecordId: string): Promise<SelectResultType<Device | null>>;

  // endregion
}
