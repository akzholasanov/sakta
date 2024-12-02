export const buildQueryParams = (params: Record<string, any>) => {
  const queryParams = new URLSearchParams();

  Object.keys(params).forEach(key => {
    if (params[key]) {
      queryParams.set(key, params[key]);
    }
  });

  return queryParams.toString();
};
