import { SelectResultType } from '@/util/types';
import { InsertResultType, UpdateResultType, DeleteResultType } from '../../util/types';

export default interface IClientService {
  // region Behavior

  AddClient<Client>(client: Client): Promise<InsertResultType>;

  FindAll<Client>(): Promise<SelectResultType<Client | null>>;

  FindByRecordId<Client>(recordId: string): Promise<SelectResultType<Client | null>>;

  RemoveClient<Client>(recordId: string): Promise<DeleteResultType<Client | null>>;

  UpdateClient<Client>(client: Client): Promise<UpdateResultType<Client | null>>;

  // endregion
}
