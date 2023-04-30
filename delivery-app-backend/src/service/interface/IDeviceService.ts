import { InsertResultType, SelectResultType, UpdateResultType } from '@/util/types';
import { DeleteResultType } from '../../util/types';

export default interface IDeviceService {
  // region Behavior

  AddDevice<Device>(device: Device): Promise<InsertResultType>;

  FindAll<Device>(): Promise<SelectResultType<Device | null>>;

  FindByRecordId<Device>(recordId: string): Promise<SelectResultType<Device | null>>;

  RemoveDevice<Device>(recordId: string): Promise<DeleteResultType<Device | null>>;

  UpdateDevice<Device>(device: Device): Promise<UpdateResultType<Device | null>>;

  // endregion
}
