import { ClientType } from '../../util/types';
import AbstractUser from './abstract/AbstractUser';

export default class Client extends AbstractUser implements ClientType {
  // region Constructors

  constructor(
    __createdtime__: number,
    __updatedtime__: number,
    password: string,
    state: string,
    city: string,
    lastName: string,
    zipCode: number,
    email: string,
    firstName: string,
    isEmployee: boolean,
    isAdmin: boolean,
    RecordId: string
  ) {
    super(__createdtime__, __updatedtime__, password, state, city, lastName, zipCode, email, firstName, isEmployee, isAdmin, RecordId);
  }

  // endregion

  // region Public Methods

  // edndregion
}
