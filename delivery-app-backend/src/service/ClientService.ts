import { AddResultType, DeleteResultType, SelectResultType, UpdateResultType } from '@/util/types';
import IClientService from './interface/IClientService';
import IUnitOfWork from './interface/IUnitOfWork';
import NullUnitOfWork from './null/NullUnitOfWork';
import { InsertResultType } from '../util/types';

export default class ClientService implements IClientService {
  // region Constructors

  constructor(unitOfWork: IUnitOfWork) {
    this.ClientUnitOfWork = unitOfWork ?? NullUnitOfWork.Singleton;
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

  public async AddClient<Client>(client: Client): Promise<InsertResultType> {
    return await this.ClientUnitOfWork.Clients.Add<Client>(client);
  }

  public async FindAll<Client>(): Promise<SelectResultType<Client | null>> {
    return await this.ClientUnitOfWork.Clients.FindAll<Client>();
  }

  public async FindByRecordId<Client>(recordId: string): Promise<SelectResultType<Client | null>> {
    return await this.ClientUnitOfWork.Clients.FindUnique<Client>(recordId);
  }

  public async RemoveClient<Client>(recordId: string): Promise<DeleteResultType<Client | null>> {
    return await this.ClientUnitOfWork.Clients.Remove<Client>(recordId);
  }

  public async UpdateClient<Client>(client: Client): Promise<UpdateResultType<Client | null>> {
    return await this.ClientUnitOfWork.Clients.Update<Client>(client);
  }

  // endregion
}
