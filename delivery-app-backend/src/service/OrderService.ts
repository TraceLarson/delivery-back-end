import { DeleteResultType, InsertResultType, SelectResultType, UpdateResultType } from '@/util/types';
import IOrderService from './interface/IOrderService';
import IUnitOfWork from './interface/IUnitOfWork';
import AbstractService from './AbstractService';

export default class OrderService extends AbstractService implements IOrderService {
  // region Constructors

  constructor(unitOfWork: IUnitOfWork) {
    super(unitOfWork);
  }

  // endregion

  // region Behavior

  public async AddOrder<Order>(order: Order): Promise<InsertResultType> {
    return await this.unitOfWork.Orders.Add<Order>(order);
  }

  public async FindAll<Order>(): Promise<SelectResultType<Order | null>> {
    return await this.unitOfWork.Orders.FindAll<Order>();
  }

  public async FindByRecordId<Order>(recordId: string): Promise<SelectResultType<Order | null>> {
    return await this.unitOfWork.Orders.FindUnique<Order>(recordId);
  }

  public async RemoveOrder<Order>(recordId: string): Promise<DeleteResultType<Order | null>> {
    return await this.unitOfWork.Orders.Remove<Order>(recordId);
  }

  public async UpdateOrder<Order>(order: Order, recordId: string): Promise<UpdateResultType<Order | null>> {
    return await this.unitOfWork.Orders.Update<Order>(order, recordId);
  }

  // endregion
}
