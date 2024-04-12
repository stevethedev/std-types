export type StdObject = Record<string | symbol, unknown>;

export default <T = unknown>(data: T): data is T & StdObject =>
  typeof data === "object" && data !== null && !Array.isArray(data);
