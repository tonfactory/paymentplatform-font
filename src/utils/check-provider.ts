export function checkProvider<T>(ctx: T | null, message = ''): T {
  if (!ctx) throw new Error(`need ${message} provider !!!`)
  return ctx
}
