export const getQueryParams = (param: OptionalRecord<string, string>) => {
  const searchParams = new URLSearchParams(window.location.search)
  Object.entries(param).forEach(([key, value]) => {
    if (value !== undefined) {
      searchParams.set(key, value)
    }
  })

  return `?${searchParams.toString()}`
}

export const addQueryParams = (param: OptionalRecord<string, string>) => {
  window.history.pushState(null, '', getQueryParams(param))
}
