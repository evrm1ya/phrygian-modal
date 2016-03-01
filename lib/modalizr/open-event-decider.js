
var openEventDecider = ($modal, openEvent) => {
  if (openEvent.type === 'show') {
    $modal.show();
  }
  else if (openEvent.type === 'fadeIn') {
    $modal.fadeIn(openEvent.speed);
  }
};

export { openEventDecider };
