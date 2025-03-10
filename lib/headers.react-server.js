import { headers } from "next/headers";

export async function getRequestHeaders (test) {
  const headerStore = await headers()
  return Array.from(headerStore.entries()).filter(([name]) => test(name))
}
