export const buildQueryParams = (params: Record<string, unknown>) => {
  const queryParams = new URLSearchParams();

  Object.keys(params).forEach(key => {
    if (params[key]) {
      queryParams.set(key, String(params[key]));
    }
  });

  return queryParams.toString();
};
