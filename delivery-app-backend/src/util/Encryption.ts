const bcrypt = require('bcrypt');

export default class Encryption {
  // regiopn Private Static Properties

  public static readonly Singleton: Encryption = new Encryption();

  // region Constructors

  private constructor() {}

  // endregion

  // region Public Methods

  public async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  public async comparePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  // endregion
}
