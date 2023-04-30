import Client from '@/domain/implementation/Client';
import IClientService from '../interface/IClientService';
import { SelectResultType } from '@/util/types';

export default class NullClientService implements IClientService {
  public static readonly Singleton: NullClientService = new NullClientService();

  // region Constructors

  private constructor() {}

  // endregion

  // region Properties

  // endregion

  // region Public Methods

  public async FindAll<Client>(): Promise<SelectResultType<Client | null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  public async FindByRecordId<Client>(RecordId: string): Promise<SelectResultType<Client | null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  // endregion
}
