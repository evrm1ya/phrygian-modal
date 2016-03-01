import { optionsChecker } from './options-checker';
import { open } from './open-modal';

class Modal {
  constructor(options) {
    optionsChecker(options);
    this.openBtnSelector = options.openBtnSelector;
    this.modalSelector = options.modalSelector;
    this.contentSelector = options.contentSelector;
    this.closeBtnSelector = options.closeBtnSelector;
    this.openEvent = options.openEvent;
    this.closeEvent = options.closeEvent;
  }

  open() {
    return open(
      this.openBtnSelector,
      this.modalSelector,
      this.contentSelector,
      this.openEvent
    );
  }

  init() {
    $(this.modalSelector).hide();
    this.open();
  }
}

export { Modal };

