import Cookies from 'js-cookie'

export function getCookie (name) {
  return Cookies.get(name)
}

export async function getCookiesHeaderValueForRequest () {
  return undefined;
}
