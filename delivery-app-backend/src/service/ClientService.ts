import { SelectResultType } from '@/util/types';
import IClientService from './interface/IClientService';
import IUnitOfWork from './interface/IUnitOfWork';
import NullUnitOfWork from './null/NullUnitOfWork';

export default class ClientService implements IClientService {
  // region Constructors

  constructor(unitOfWork: IUnitOfWork) {
    this.ClientUnitOfWork = unitOfWork;
  }

  // endregion

  // region Public Properties

  public get ClientUnitOfWork(): IUnitOfWork {
    return this._ClientUnitOfWork;
  }

  public set ClientUnitOfWork(value: IUnitOfWork) {
    this._ClientUnitOfWork = value;
  }

  // endregion

  // region Private Properties

  private _ClientUnitOfWork: IUnitOfWork = NullUnitOfWork.Singleton;

  // endregion

  // region Behavior

  public async FindAll<Client>(): Promise<SelectResultType<Client>> {
    return await this.ClientUnitOfWork.Clients.FindAll<Client>();
  }

  public async FindByRecordId<Client>(RecordId: string): Promise<SelectResultType<Client>> {
    return await this.ClientUnitOfWork.Clients.FindUnique<Client>(RecordId);
  }

  // endregion
}
