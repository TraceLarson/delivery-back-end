import { InsertResultType, SelectResultType, UpdateResultType } from '@/util/types';
import { DeleteResultType } from '../../util/types';

export default interface IOrderService {
  // region Behavior

  AddOrder<Order>(order: Order): Promise<InsertResultType>;

  FindAll<Order>(): Promise<SelectResultType<Order | null>>;

  FindByRecordId<Order>(recordId: string): Promise<SelectResultType<Order | null>>;

  RemoveOrder<Order>(recordId: string): Promise<DeleteResultType<Order | null>>;

  UpdateOrder<Order>(order: Order, recordId: string): Promise<UpdateResultType<Order | null>>;

  // endregion
}
