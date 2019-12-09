interface RequestOptions extends RequestInit {
  body?: any;
}

const getToken = () => localStorage.getItem('_t');

export const request = async (
  endpoint: string,
  options: RequestOptions = {},
) => {
  const url = `api/${endpoint}`;

  const headers = new Headers(options.headers || {});

  const token = getToken();

  if (token) {
    headers.set('authorization', `Bearer ${token}`);
  }

  const fetchOptions = {
    ...options,
    headers,
  };

  if (fetchOptions.body) {
    headers.set('content-type', 'application/json');
    fetchOptions.body = JSON.stringify(fetchOptions.body);
  }

  const res = await fetch(url, fetchOptions);

  if (!res.ok) {
    throw new Error((await res.text()) || res.statusText);
  }

  try {
    return await res.json();
  } catch {
    return null;
  }
};
