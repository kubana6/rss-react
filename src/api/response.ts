export const getResponse = async <T>(url: string): Promise<T> => {
  const response = await fetch(`${url}`);

  const result = (await response.json()) as T;

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return result;
};
