import { Singleton } from 'app/utils/common';

export class LocalStorageService extends Singleton {
  /**
   * set item to LS
   * @param {string} key
   * @param value
   */
  set(key: string, value: any): void {
    return window.localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * return item from LS
   * @param {string} key
   * @returns {any}
   */
  get(key: string): any {
    const data = window.localStorage.getItem(key);
    return data === 'undefined' ? null : JSON.parse(data);
  }

  /**
   * removes item in LS
   * @param {string} key
   */
  remove(key: string): void {
    return window.localStorage.removeItem(key);
  }

  /**
   * clears LS
   */
  clear(): void {
    return window.localStorage.clear();
  }
}
