# Utilities

This directory contains various utility functions and modules used across the application.

## `helpers.ts`

This file provides helper functions for interacting with `sessionStorage` and `localStorage`.

### Functions

- `setSessionItem<K extends keyof SessionStorageMap>(key: K, value: SessionStorageMap[K]): void`

  - Saves a value to `sessionStorage` as JSON.
  - **Example:**

    ```typescript
    import { setSessionItem } from './helpers';
    import type { SessionStorageMap } from 'types';

    interface MySessionData {
      userId: string;
      token: string;
    }

    // Extend SessionStorageMap to include your custom type
    declare module 'types' {
      interface SessionStorageMap {
        'my-app-data': MySessionData;
      }
    }

    setSessionItem('my-app-data', { userId: '123', token: 'abc' });
    ```

- `getSessionItem<K extends keyof SessionStorageMap>(key: K): SessionStorageMap[K] | null`

  - Retrieves a value from `sessionStorage` and parses it from JSON.
  - **Example:**

    ```typescript
    import { getSessionItem } from './helpers';
    import type { SessionStorageMap } from 'types';

    interface MySessionData {
      userId: string;
      token: string;
    }

    // Extend SessionStorageMap to include your custom type
    declare module 'types' {
      interface SessionStorageMap {
        'my-app-data': MySessionData;
      }
    }

    const data = getSessionItem('my-app-data');
    if (data) {
      console.log(data.userId); // '123'
    }
    ```

- `removeSessionItem<K extends keyof SessionStorageMap>(key: K): void`

  - Removes an item from `sessionStorage`.
  - **Example:**
    ```typescript
    import { removeSessionItem } from './helpers';
    removeSessionItem('my-app-data');
    ```

- `setLocalItem<K extends keyof LocalStorageMap>(key: K, value: LocalStorageMap[K]): void`

  - Saves a value to `localStorage` as JSON.
  - **Example:**

    ```typescript
    import { setLocalItem } from './helpers';
    import type { LocalStorageMap } from 'types';

    interface MyLocalData {
      theme: string;
    }

    // Extend LocalStorageMap to include your custom type
    declare module 'types' {
      interface LocalStorageMap {
        'app-settings': MyLocalData;
      }
    }

    setLocalItem('app-settings', { theme: 'dark' });
    ```

- `getLocalItem<K extends keyof LocalStorageMap>(key: K): LocalStorageMap[K] | null`

  - Retrieves a value from `localStorage` and parses it from JSON.
  - **Example:**

    ```typescript
    import { getLocalItem } from './helpers';
    import type { LocalStorageMap } from 'types';

    interface MyLocalData {
      theme: string;
    }

    // Extend LocalStorageMap to include your custom type
    declare module 'types' {
      interface LocalStorageMap {
        'app-settings': MyLocalData;
      }
    }

    const settings = getLocalItem('app-settings');
    if (settings) {
      console.log(settings.theme); // 'dark'
    }
    ```

- `removeLocalItem<K extends keyof LocalStorageMap>(key: K): void`
  - Removes an item from `localStorage`.
  - **Example:**
    ```typescript
    import { removeLocalItem } from './helpers';
    removeLocalItem('app-settings');
    ```

## `logger.ts`

This file provides a simple logging utility.

### Class: `Logger`

- `error(message: string, options?: LogOptions): void`
  - Logs an error message.
- `warn(message: string, options?: LogOptions): void`
  - Logs a warning message.
- `info(message: string, options?: LogOptions): void`
  - Logs an informational message.
- `debug(message: string, options?: LogOptions): void`
  - Logs a debug message.

### Usage

```typescript
import { logger } from './logger';

logger.error('This is an error message', { customData: 123 });
logger.warn('A warning occurred');
logger.info('Some information');
logger.debug('Debug data', { variable: 'value' });
```
