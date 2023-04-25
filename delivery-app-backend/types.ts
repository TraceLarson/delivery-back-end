export type SqlStatementType = string;
export type OperationType = string;

export type UserLoginDataType = {
  email: string;
  password: string;
};

export type EmployeeType = {
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
};

export type ClientType = {
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
};

export type AddResultType = {
  message: string;
  inserted_hashes: string[];
  skipped_hashes: string[];
};

export type InsertResultType = {
  status: number;
  result: AddResultType | null;
  error: string | null;;    
};

export type Await<T> = T extends {
  then(onfulfilled?: (value: infer U) => unknown): unknown;
}
  ? U
  : T;
