export function getQueryParams() {
  const searchParams = new URLSearchParams(window.location.search)
  const queryParams: { [key: string]: string } = {}

  for (const [key, value] of searchParams.entries()) {
    queryParams[key] = value
  }

  return queryParams
}
