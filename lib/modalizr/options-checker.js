
var selectorChecker = (obj) => {
  for(var prop in obj) {
    if (prop.includes('Selector')) {
      if (!obj[prop] || typeof obj[prop] != 'string') {
        console.error('Invalid selector.');
        obj[prop] = '.INVALID-SELECTOR';
      }
    }
  };
  return obj;
};

var openEventChecker = (options) => {
  let openEvent = options.openEvent;
  if (!openEvent || typeof openEvent != 'object') {
    options.openEvent = { type: 'show' };
  }
  else if (openEvent && typeof openEvent === 'object') {
    let type = openEvent.type;
    let speed = openEvent.speed;
    if (!type || (type != 'fadeIn' && type != 'show')) {
      options.openEvent.type = 'show';
    }
    if (type === 'fadeIn' && (!speed || typeof speed != 'number' || !(speed > 0))) {
      options.openEvent.speed = 1000;
    }
  }
  return options;
};

var optionsChecker = (options) => {
  selectorChecker(options);  
  openEventChecker(options);
  return options;
};

export { optionsChecker };
