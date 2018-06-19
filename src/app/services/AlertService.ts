import {Singleton} from "app/utils/common";

export class AlertService extends Singleton {
  /**
   *
   * @param {string} message
   * @param {string} title
   */
  success(message: string, title = 'Success!') {
    /*this.toastr.success(message, title, {toastLife: 4000, enableHTML: true});*/
    console.log(message);
  }

  /**
   *
   * @param {string} message
   * @param {string} title
   */
  error(message: string, title = 'Error') {
    /*this.toastr.error(message, title, {toastLife: 4500, enableHTML: true});*/
    console.log(message);
  }

  /**
   *
   * @param {string} message
   * @param {string} title
   */
  info(message: string, title = 'Information') {
    /*this.toastr.info(message, title, {toastLife: 4000, enableHTML: true});*/
    console.log(message);
  }

  /**
   *
   * @param {string} message
   * @param {string} title
   */
  warning(message: string, title = 'Warning') {
    /*this.toastr.warning(message, title, {toastLife: 4000, enableHTML: true});*/
    console.log(message);
  }
}
