import { SelectResultType } from '@/util/types';
import IOrderService from './interface/IOrderService';
import IUnitOfWork from './interface/IUnitOfWork';
import NullUnitOfWork from './null/NullUnitOfWork';

export default class OrderService implements IOrderService {
  // region Constructors

  constructor(unitOfWork: IUnitOfWork) {
    this.OrderUnitOfWork = unitOfWork ?? NullUnitOfWork.Singleton;
  }
  FindByrecordId<Order>(recordId: string): Promise<SelectResultType<Order | null>> {
    throw new Error('Method not implemented.');
  }

  // endregion

  // region Public Properties

  public get OrderUnitOfWork(): IUnitOfWork {
    return this._OrderUnitOfWork;
  }

  public set OrderUnitOfWork(value: IUnitOfWork) {
    this._OrderUnitOfWork = value;
  }

  // endregion

  // region Private Properties

  private _OrderUnitOfWork: IUnitOfWork = NullUnitOfWork.Singleton;

  // endregion

  // region Behavior

  public async AddOrder<Order>(order: Order): Promise<InsertResultType> {
    return await this.OrderUnitOfWork.Orders.Add<Order>(order);
  }

  public async FindAll<Order>(): Promise<SelectResultType<Order | null>> {
    return await this.OrderUnitOfWork.Orders.FindAll<Order>();
  }

  public async FindByRecordId<Order>(recordId: string): Promise<SelectResultType<Order | null>> {
    return await this.OrderUnitOfWork.Orders.FindUnique<Order>(recordId);
  }

  public async RemoveOrder<Order>(recordId: string): Promise<DeleteResultType<Order | null>> {
    return await this.OrderUnitOfWork.Orders.Remove<Order>(recordId);
  }

  public async UpdateOrder<Order>(order: Order): Promise<UpdateResultType<Order | null>> {
    return await this.OrderUnitOfWork.Orders.Update<Order>(order);
  }

  // endregion
}
