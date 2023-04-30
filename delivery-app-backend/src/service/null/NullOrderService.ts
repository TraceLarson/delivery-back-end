import Order from '@/domain/implementation/Order';
import IOrderService from '../interface/IOrderService';
import { SelectResultType } from '@/util/types';

export default class NullOrderService implements IOrderService {
  public static readonly Singleton: NullOrderService = new NullOrderService();

  // region Constructors

  private constructor() {}

  // endregion

  // region Properties

  // endregion

  // region Public Methods

  public async FindAll<Order>(): Promise<SelectResultType<Order | null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  public async FindByRecordId<Order>(RecordId: string): Promise<SelectResultType<Order | null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  // endregion
}
