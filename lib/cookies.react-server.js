import { cookies } from "next/headers";

export async function getCookie (name) {
  const store = await cookies();
  return store.get(name)?.value
}

export async function getCookies (names) {
  const store = await cookies();
  return names.map(name => store.get(name)?.value)
}

export async function getCookiesHeaderValueForRequest () {
  const store = await cookies();

  return store.toString()
}

export { appendCookie } from './cookies.common.js'
