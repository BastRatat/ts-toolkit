export function assertTypeT<T>(
  argument: any,
  callback: (...args: any[]) => void,
): asserts argument is T {
  callback()
}
