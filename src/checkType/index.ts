export function checkTypeT<T>(
  argument: any,
  checker: (...args: any[]) => boolean,
): argument is T {
  return checker()
}
