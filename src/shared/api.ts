/**
 * Global fetch utility with base URL from environment variables
 */

const getBaseUrl = () => {
  // Use environment variable in browser context
  const envUrl = import.meta.env.PAYLOAD_URL || "http://localhost:3000";
  return envUrl;
};

export const apiFetch = (url: string, options?: RequestInit) => {
  const baseUrl = getBaseUrl();
  const fullUrl = `${baseUrl}${url.startsWith("/") ? url : `/${url}`}`;

  return fetch(fullUrl, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });
};

/**
 * Convenience methods for common HTTP verbs
 */
export const api = {
  get: (url: string, options?: RequestInit) =>
    apiFetch(url, { ...options, method: "GET" }),

  post: (url: string, data?: any, options?: RequestInit) =>
    apiFetch(url, {
      ...options,
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    }),

  put: (url: string, data?: any, options?: RequestInit) =>
    apiFetch(url, {
      ...options,
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    }),

  patch: (url: string, data?: any, options?: RequestInit) =>
    apiFetch(url, {
      ...options,
      method: "PATCH",
      body: data ? JSON.stringify(data) : undefined,
    }),

  delete: (url: string, options?: RequestInit) =>
    apiFetch(url, { ...options, method: "DELETE" }),
};

export default api;
