/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  interface Window {
    electronAPI: {
      deleteStoreValue(arg0: string): unknown;
      on: (channel: string, callback: (...args: any[]) => void) => void;
      getStoreValue: (key: string) => Promise<any>;
      setStoreValue: (key: string, value: any) => void;
    };
    electronStore: {
      get: (key: string) => unknown;
      set: (key: string, value: unknown) => void;
      delete: (key: string) => void;
    };
  }
}
