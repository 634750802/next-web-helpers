/**
 * @param name name of cookie
 * @returns The correspond cookie value. undefined if not exists.
 */
export function getCookie (name: string): Promise<string | undefined>

/**
 * @returns The `Cookie` header value string for server or client request.
 * - On client, cookies are always sent by default, returns undefined.
 * - On server, get cookies from `next/header` and serialize to string.
 */
export function getCookiesHeaderValueForRequest (): Promise<string | undefined>
