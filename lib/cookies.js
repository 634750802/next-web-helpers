import Cookies from 'js-cookie'

export async function getCookie (name) {
  return Cookies.get(name)
}

export async function getCookies (names) {
  return names.map(name => Cookies.get(name))
}

export async function getCookiesHeaderValueForRequest () {
  return undefined;
}
