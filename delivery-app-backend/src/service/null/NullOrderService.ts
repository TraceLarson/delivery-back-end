import Order from '@/domain/implementation/Order';
import IOrderService from '../interface/IOrderService';
import { InsertResultType, DeleteResultType, SelectResultType, UpdateResultType } from '@/util/types';

export default class NullOrderService implements IOrderService {
  public static readonly Singleton: NullOrderService = new NullOrderService();

  // region Constructors

  private constructor() {}

  // endregion

  // region Properties

  // endregion

  // region Public Methods

  public async AddOrder<Order>(order: Order): Promise<InsertResultType> {
    return new Promise<InsertResultType>((resolve) => {
      resolve({} as InsertResultType);
    });
  }

  public async FindAll<Order>(): Promise<SelectResultType<Order | null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  public async FindByRecordId<Order>(recordId: string): Promise<SelectResultType<Order | null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  public async UpdateOrder<Order>(order: Order): Promise<UpdateResultType<Order | null>> {
    return new Promise<UpdateResultType<null>>((resolve) => {
      resolve({} as UpdateResultType<null>);
    });
  }

  public async RemoveOrder<Order>(recordId: string): Promise<DeleteResultType<Order | null>> {
    return new Promise<DeleteResultType<null>>((resolve) => {
      resolve({} as DeleteResultType<null>);
    });
  }

  // endregion
}
