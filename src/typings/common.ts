/**
 * Nullable check
 */
export type NUL<T> = T | null;

/**
 * Undefined check
 */
export type EMP<T> = T | undefined;

/**
 * Nullable & Undefined check
 */
export type EMP_NUL<T> = NUL<T> | undefined;

/**
 * Empty Callback type
 * @example (value: string) => void
 */
export type callbackType<T = unknown, K = void> = (value?: T) => K;
