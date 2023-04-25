import { Operations } from '@/util/DBConstants';

export default class OperationStringBuilder {
  // region Constructors

  public constructor(operation: Operations, sqlString: string | null) {
    this.Operation = operation;
    this.Sql = sqlString || '';
  }

  // endregion

  // region Public Properties

  Operation: string = '';

  Sql: string = '';

  // endregion

  // region Public Methods

  public Build(): string {
    switch (this.Operation) {
      case Operations.SQL:
        return JSON.stringify({
          operation: this.Operation,
          sql: this.Sql,
        });
      case Operations.CREATE_SCHEMA:
      case Operations.CREATE_TABLE:
      case Operations.INSERT_RECORD:
      case Operations.UPDATE_RECORD:
      case Operations.BULK_INSERT:
      default:
        return '';
    }
  }

  // endregion
}
