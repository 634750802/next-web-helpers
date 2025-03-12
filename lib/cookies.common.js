export function appendCookie (cookieString, name, value) {
  const parts = cookieString.split(';')
  const index = parts.findIndex(c => c.startsWith(`${encodeURIComponent(name)}=`))
  if (index === -1) {
    parts.push(`${encodeURIComponent(name)}=${encodeURIComponent(value)}`)
  } else {
    parts[index] = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
  }
  return parts.join(';')
}
