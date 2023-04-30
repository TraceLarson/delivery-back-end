import Client from '@/domain/implementation/Client';
import IClientService from '../interface/IClientService';
import { InsertResultType, SelectResultType, UpdateResultType } from '@/util/types';
import { DeleteResultType } from '../../util/types';

export default class NullClientService implements IClientService {
  public static readonly Singleton: NullClientService = new NullClientService();

  // region Constructors

  private constructor() {}

  // endregion

  // region Properties

  // endregion

  // region Public Methods

  public async AddClient<Client>(client: Client): Promise<InsertResultType> {
    return new Promise<InsertResultType>((resolve) => {
      resolve({} as InsertResultType);
    });
  }

  public async FindAll<Client>(): Promise<SelectResultType<Client | null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  public async FindByRecordId<Client>(recordId: string): Promise<SelectResultType<Client | null>> {
    return new Promise<SelectResultType<null>>((resolve) => {
      resolve({} as SelectResultType<null>);
    });
  }

  public async RemoveClient<Client>(recordId: string): Promise<DeleteResultType<Client | null>> {
    return new Promise<DeleteResultType<null>>((resolve) => {
      resolve({} as DeleteResultType<null>);
    });
  }

  public async UpdateClient<Client>(client: Client): Promise<UpdateResultType<Client | null>> {
    return new Promise<UpdateResultType<null>>((resolve) => {
      resolve({} as UpdateResultType<null>);
    });
  }

  // endregion
}
