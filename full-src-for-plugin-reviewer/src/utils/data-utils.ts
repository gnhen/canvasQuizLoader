export function pickBy<T>(
  obj: Record<string, T>, 
  predicate: (value: T, key: string) => boolean
): Record<string, T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => predicate(value as T, key))
  );
}