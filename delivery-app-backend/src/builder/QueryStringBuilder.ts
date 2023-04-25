import { ObjectToQueryString } from '@/util';

export default class QueryStringBuilder {
  // region Constructors

  public constructor() {}

  // endregion

  // region Public Methods

  public static buildSelectQuery(tableName: string, columns: string[]): string {
    let query: string = `SELECT ${columns.join(', ')} FROM ${tableName}`;
    return query;
  }

  public static buildInsertQuery<T>(tableName: string, columns: string[], objectToInsert: T): string | null {
    if (objectToInsert == null) {
      throw new Error('objectToInsert cannot be null');
      return null;
    }

    const values: (string | undefined)[] = ObjectToQueryString<T>(objectToInsert, columns);
    if (values == undefined) {
      throw new Error('objectToInsert did not contain any values');
      return null;
    }

    const query: string = `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES (${values.join(', ')})`;
    return query;
  }

  public static buildUpdateQuery(tableName: string, columns: string[], values: string[]): string {
    let query: string = `UPDATE ${tableName} SET ${columns.join(', ')} = ${values.join(', ')}`;
    return query;
  }

  public static buildDeleteQuery(tableName: string, columns: string[], values: string[]): string {
    let query: string = `DELETE FROM ${tableName} WHERE ${columns.join(', ')} = ${values.join(', ')}`;
    return query;
  }

  // endregion
}
