import Encryption from '../../../util/Encryption';

export default class AbstractUser {
  // region Properties

  __createdtime__: number = Date.now();

  __updatedtime__: number = Date.now();

  password: string = '';

  state: string = '';

  city: string = '';

  lastName: string = '';

  zipCode: number = 0;

  email: string = '';

  firstName: string = '';

  isEmployee: boolean = false;

  isAdmin: boolean = false;

  RecordId: string = '';

  // endregion

  // region Constructors

  constructor() // password: string, // __updatedtime__: number, // __createdtime__: number,
  // state: string,
  // city: string,
  // lastName: string,
  // zipCode: number,
  // email: string,
  // firstName: string,
  // isEmployee: boolean,
  // isAdmin: boolean,
  // RecordId: string
  {
    // this.__createdtime__ = __createdtime__;
    // this.__updatedtime__ = __updatedtime__;
    // this.password = password;
    // this.state = state;
    // this.city = city;
    // this.lastName = lastName;
    // this.zipCode = zipCode;
    // this.email = email;
    // this.firstName = firstName;
    // this.isEmployee = isEmployee || false;
    // this.isAdmin = isAdmin || false;
    // this.RecordId = RecordId || '';
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
