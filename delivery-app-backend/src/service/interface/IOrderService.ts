import { SelectResultType } from '@/util/types';

export default interface IOrderService {
  // region Behavior

  FindAll<Order>(): Promise<SelectResultType<Order | null>>;

  FindByRecordId<Order>(RecordId: string): Promise<SelectResultType<Order | null>>;

  // endregion
}
