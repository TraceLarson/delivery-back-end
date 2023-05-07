import { SelectResultType } from '@/util/types';
import { InsertResultType, UpdateResultType, DeleteResultType } from '../../util/types';

export default interface IClientService {
  // region Behavior

  AddClient<Client>(client: Client): Promise<InsertResultType>;

  FindAll<Client>(): Promise<SelectResultType<Client>>;

  FindByRecordId<Client>(recordId: string): Promise<SelectResultType<Client>>;

  RemoveClient<Client>(recordId: string): Promise<DeleteResultType<Client>>;

  UpdateClient<Client>(client: Client, recordId: string): Promise<UpdateResultType<Client>>;

  // endregion
}
