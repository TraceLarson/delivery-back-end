import { SelectResultType } from '@/util/types';
import IOrderService from './interface/IOrderService';
import IUnitOfWork from './interface/IUnitOfWork';
import NullUnitOfWork from './null/NullUnitOfWork';

export default class OrderService implements IOrderService {
  // region Constructors

  constructor(unitOfWork: IUnitOfWork) {
    this.OrderUnitOfWork = unitOfWork;
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

  public async FindAll<Order>(): Promise<SelectResultType<Order>> {
    return this.OrderUnitOfWork.Orders.FindAll<Order>();
  }

  public FindByRecordId<Order>(RecordId: string): Promise<SelectResultType<Order>> {
    return this.OrderUnitOfWork.Orders.FindUnique<Order>(RecordId);
  }

  // endregion
}
