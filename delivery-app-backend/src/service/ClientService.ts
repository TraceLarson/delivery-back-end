import { DeleteResultType, SelectResultType, UpdateResultType } from '@/util/types';
import IClientService from './interface/IClientService';
import IUnitOfWork from './interface/IUnitOfWork';
import { InsertResultType } from '../util/types';
import AbstractService from './AbstractService';

export default class ClientService extends AbstractService implements IClientService {
  // region Constructors

  constructor(unitOfWork: IUnitOfWork) {
    super(unitOfWork);
  }

  // endregion

  // // region Behavior

  public async AddClient<Client>(client: Client): Promise<InsertResultType> {
    return await this.unitOfWork.Clients.Add<Client>(client);
  }

  public async FindAll<Client>(): Promise<SelectResultType<Client | null>> {
    return await this.unitOfWork.Clients.FindAll<Client>();
  }

  public async FindByRecordId<Client>(recordId: string): Promise<SelectResultType<Client | null>> {
    return await this.unitOfWork.Clients.FindUnique<Client>(recordId);
  }

  public async RemoveClient<Client>(recordId: string): Promise<DeleteResultType<Client | null>> {
    return await this.unitOfWork.Clients.Remove<Client>(recordId);
  }

  public async UpdateClient<Client>(client: Client, recordId: string): Promise<UpdateResultType<Client | null>> {
    return await this.unitOfWork.Clients.Update<Client>(client, recordId);
  }

  // endregion
}
