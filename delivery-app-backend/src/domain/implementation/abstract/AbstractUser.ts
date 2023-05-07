import Encryption from '../../../util/Encryption';

export default class AbstractUser {
  // region Properties

  __createdtime__: number;
  __updatedtime__: number;
  password: string;
  state: string;
  city: string;
  lastName: string;
  zipCode: number;
  email: string;
  firstName: string;
  RecordId: string;

  // endregion

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
    RecordId: string
  ) {
    this.__createdtime__ = __createdtime__;
    this.__updatedtime__ = __updatedtime__;
    this.password = password;
    this.state = state;
    this.city = city;
    this.lastName = lastName;
    this.zipCode = zipCode;
    this.email = email;
    this.firstName = firstName;
    this.RecordId = RecordId || '';
  }

  // endregion

  // region Public Methods

  public async hashPassword(): Promise<this> {
    this.password = await Encryption.Singleton.hashPassword(this.password);
    return this;
  }

  // endregion

  // region Protected Methods

  protected getCreatedTime(this: AbstractUser): string {
    return new Date(this.__createdtime__).toLocaleString();
  }

  protected getFullName(this: AbstractUser): string {
    return this.firstName + ' ' + this.lastName;
  }

  protected getUpdatedTime(this: AbstractUser): string {
    return new Date(this.__updatedtime__).toLocaleString();
  }

  // edndregion
}
