import { POOL } from './container';

/**
 * Injects a connection pool
 * @param constructor
 */
export function injectPool<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        pool = POOL;
    };
}
