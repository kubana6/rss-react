export const toQueryString = (obj: Record<string, unknown>): string =>
  Object.keys(obj)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key] ? String(obj[key]) : "")}`
    )
    .join("&");
