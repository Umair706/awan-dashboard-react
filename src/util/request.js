import { useQuery, useMutation } from 'react-query';

const API_BASE_URL = 'https://api.example.com';

const fetchApi = async (
  endpoint,
  { method = 'GET', params = {}, body = {} } = {}
) => {
  const url = new URL(`${API_BASE_URL}/${endpoint}`);

  // Append query parameters to the URL
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(url.toString(), options);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

const useApi = (endpoint, options = {}) => {
  return useQuery(
    ['api', endpoint, options.params],
    () => fetchApi(endpoint, options),
    {
      refetchOnWindowFocus: false,
      ...options.queryOptions,
    }
  );
};

const useApiMutation = (options = {}) => {
  const { method = 'POST', endpoint, ...mutationOptions } = options;

  return useMutation((body) => fetchApi(endpoint, { method, body }), {
    ...mutationOptions,
  });
};

export { useApi, useApiMutation };
