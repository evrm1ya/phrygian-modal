
import { Modal } from '../lib/modalizr/modalizr';

var options = {
  openBtnSelector: '#open-modal-btn',
  modalSelector: '#modal',
  contentSelector: '#modal-content',
  closeBtnSelector: '#modal-close-btn',
  openEvent: {
    type: 'fadeIn',
    speed: 1000
  },
  closeEvent: {
    type: 'fadeOut',
    speed: 1000
  }
};

var modal = new Modal(options);

modal.init();

