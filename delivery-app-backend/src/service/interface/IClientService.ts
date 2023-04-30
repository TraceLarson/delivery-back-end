import { SelectResultType } from '@/util/types';

export default interface IClientService {
  // region Behavior

  FindAll<Client>(): Promise<SelectResultType<Client | null>>;

  FindByRecordId<Client>(RecordId: string): Promise<SelectResultType<Client | null>>;

  // endregion
}
