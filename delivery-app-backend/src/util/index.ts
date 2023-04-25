export function ObjectToQueryString<T>(obj: T | any, columns: string[]) {
  return columns.map((column) => {
    if (obj[column] != null) {
      return `"${obj[column]}"`;
    }
  });
}
