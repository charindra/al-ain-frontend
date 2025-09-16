# `ServiceProvider.tsx`

This file defines the `ServiceProvider` component, which uses React's Context API to manage API call states and provides functions to interact with APIs across the application. It now uses `axios` and `axios-retry` for API calls, including retry logic with exponential backoff.

### Component: `ServiceProvider`

- Wraps its `children` with a `ServiceContext.Provider`.
- Manages API loading states, responses, and errors using `useReducer`.
- Provides `invokeApi` and `terminateAPI` functions to its consumers.

### `invokeApi` Function

- Asynchronously handles API requests using `axios`.
- Supports `GET`, `POST`, `PUT`, `DELETE`, `PATCH` methods.
- Implements an exponential backoff retry mechanism for failed requests using `axios-retry`.
- Updates the global API state with loading, response, and error information.

#### Parameters

- `id: keyof ApiResponseMap`: A unique identifier for the API call, used to store its state.
- `options: InvokeApiOptions`: An object containing the API request configuration.
  - `method`: HTTP method (e.g., `API_METHODS.GET`).
  - `url`: The API endpoint URL.
  - `data?`: (Optional) Request body data for `POST`, `PUT`, `PATCH`.
  - `requestConfig?`: (Optional) AxiosRequestConfig object for custom configurations like headers, params, etc.
  - `withCredentials?`: (Optional) Boolean to include cookies in the request.
  - `timeout?`: (Optional) Request timeout in milliseconds.
  - `shouldRetry?`: (Optional) Boolean to enable/disable retry logic (defaults to `true`).

#### Example Usage

```typescript
import { useService } from 'hooks/useService';
import { API_METHODS } from 'types';

interface MyApiResponse {
  message: string;
}

declare module 'types' {
  interface ApiResponseMap {
    myApiCall: MyApiResponse;
  }
}

function MyComponent() {
  const { invokeApi, state } = useService();

  const fetchData = async () => {
    await invokeApi('myApiCall', {
      method: API_METHODS.GET,
      url: '/api/data',
      withCredentials: true,
      requestConfig: {
        // Example of using requestConfig for custom headers
        headers: {
          Authorization: 'Bearer my-token',
        },
      },
      timeout: 5000, // Example of setting a custom timeout
    });
  };

  if (state.myApiCall?.isLoading) {
    return <div>Loading...</div>;
  }

  if (state.myApiCall?.error) {
    return <div>Error: {state.myApiCall.error.message}</div>;
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {state.myApiCall?.response && <p>Response: {state.myApiCall.response.message}</p>}
    </div>
  );
}
```

### `terminateAPI` Function

- Aborts any ongoing API request by calling `abortController.current?.abort()`.

#### Example Usage

```typescript
import { useService } from 'hooks/useService';
import React, { useEffect } from 'react';

function MyComponentWithCleanup() {
  const { terminateAPI } = useService();

  useEffect(() => {
    return () => {
      terminateAPI();
    };
  }, [terminateAPI]);

  return <div>Component with API cleanup</div>;
}
```

### Context: `ServiceContext`

- The React Context object created for sharing API-related state and functions.
- The `ServiceProvider` is responsible for providing the `ServiceContext.Provider` value.
- Consumers can access the context using `useContext(ServiceContext)` or the `useService` hook (if defined).
