
import { openEventDecider } from './open-event-decider';

var open = (openBtnSelector, modalSelector, contentSelector, openEvent) => {
  let $openBtn = $(openBtnSelector);
  let $modal = $(modalSelector);
  let $contentBox = $(contentSelector);
  $openBtn.on('click', function(event) {
    event.preventDefault();
    openEventDecider($modal, openEvent);
  });
}

export { open };
