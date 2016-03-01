(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _optionsChecker = require('./options-checker');

var _openModal = require('./open-modal');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = function () {
  function Modal(options) {
    _classCallCheck(this, Modal);

    (0, _optionsChecker.optionsChecker)(options);
    this.openBtnSelector = options.openBtnSelector;
    this.modalSelector = options.modalSelector;
    this.contentSelector = options.contentSelector;
    this.closeBtnSelector = options.closeBtnSelector;
    this.openEvent = options.openEvent;
    this.closeEvent = options.closeEvent;
  }

  _createClass(Modal, [{
    key: 'open',
    value: function open() {
      return (0, _openModal.open)(this.openBtnSelector, this.modalSelector, this.contentSelector, this.openEvent);
    }
  }, {
    key: 'init',
    value: function init() {
      $(this.modalSelector).hide();
      this.open();
    }
  }]);

  return Modal;
}();

exports.Modal = Modal;

},{"./open-modal":3,"./options-checker":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var openEventDecider = function openEventDecider($modal, openEvent) {
  if (openEvent.type === 'show') {
    $modal.show();
  } else if (openEvent.type === 'fadeIn') {
    $modal.fadeIn(openEvent.speed);
  }
};

exports.openEventDecider = openEventDecider;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.open = undefined;

var _openEventDecider = require('./open-event-decider');

var open = function open(openBtnSelector, modalSelector, contentSelector, openEvent) {
  var $openBtn = $(openBtnSelector);
  var $modal = $(modalSelector);
  var $contentBox = $(contentSelector);
  $openBtn.on('click', function (event) {
    event.preventDefault();
    (0, _openEventDecider.openEventDecider)($modal, openEvent);
  });
};

exports.open = open;

},{"./open-event-decider":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var selectorChecker = function selectorChecker(obj) {
  for (var prop in obj) {
    if (prop.includes('Selector')) {
      if (!obj[prop] || typeof obj[prop] != 'string') {
        console.error('Invalid selector.');
        obj[prop] = '.INVALID-SELECTOR';
      }
    }
  };
  return obj;
};

var openEventChecker = function openEventChecker(options) {
  var openEvent = options.openEvent;
  if (!openEvent || (typeof openEvent === 'undefined' ? 'undefined' : _typeof(openEvent)) != 'object') {
    options.openEvent = { type: 'show' };
  } else if (openEvent && (typeof openEvent === 'undefined' ? 'undefined' : _typeof(openEvent)) === 'object') {
    var type = openEvent.type;
    var speed = openEvent.speed;
    if (!type || type != 'fadeIn' && type != 'show') {
      options.openEvent.type = 'show';
    }
    if (type === 'fadeIn' && (!speed || typeof speed != 'number' || !(speed > 0))) {
      options.openEvent.speed = 1000;
    }
  }
  return options;
};

var optionsChecker = function optionsChecker(options) {
  selectorChecker(options);
  openEventChecker(options);
  return options;
};

exports.optionsChecker = optionsChecker;

},{}],5:[function(require,module,exports){
'use strict';

var _modalizr = require('../lib/modalizr/modalizr');

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

var modal = new _modalizr.Modal(options);

modal.init();

},{"../lib/modalizr/modalizr":1}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvbW9kYWxpenIvbW9kYWxpenIuanMiLCJsaWIvbW9kYWxpenIvb3Blbi1ldmVudC1kZWNpZGVyLmpzIiwibGliL21vZGFsaXpyL29wZW4tbW9kYWwuanMiLCJsaWIvbW9kYWxpenIvb3B0aW9ucy1jaGVja2VyLmpzIiwic3JjL21vZGFsLWFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztJQ0dNO0FBQ0osV0FESSxLQUNKLENBQVksT0FBWixFQUFxQjswQkFEakIsT0FDaUI7O0FBQ25CLHdDQUFlLE9BQWYsRUFEbUI7QUFFbkIsU0FBSyxlQUFMLEdBQXVCLFFBQVEsZUFBUixDQUZKO0FBR25CLFNBQUssYUFBTCxHQUFxQixRQUFRLGFBQVIsQ0FIRjtBQUluQixTQUFLLGVBQUwsR0FBdUIsUUFBUSxlQUFSLENBSko7QUFLbkIsU0FBSyxnQkFBTCxHQUF3QixRQUFRLGdCQUFSLENBTEw7QUFNbkIsU0FBSyxTQUFMLEdBQWlCLFFBQVEsU0FBUixDQU5FO0FBT25CLFNBQUssVUFBTCxHQUFrQixRQUFRLFVBQVIsQ0FQQztHQUFyQjs7ZUFESTs7MkJBV0c7QUFDTCxhQUFPLHFCQUNMLEtBQUssZUFBTCxFQUNBLEtBQUssYUFBTCxFQUNBLEtBQUssZUFBTCxFQUNBLEtBQUssU0FBTCxDQUpGLENBREs7Ozs7MkJBU0E7QUFDTCxRQUFFLEtBQUssYUFBTCxDQUFGLENBQXNCLElBQXRCLEdBREs7QUFFTCxXQUFLLElBQUwsR0FGSzs7OztTQXBCSDs7O1FBMEJHOzs7Ozs7Ozs7QUM1QlQsSUFBSSxtQkFBbUIsU0FBbkIsZ0JBQW1CLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBdUI7QUFDNUMsTUFBSSxVQUFVLElBQVYsS0FBbUIsTUFBbkIsRUFBMkI7QUFDN0IsV0FBTyxJQUFQLEdBRDZCO0dBQS9CLE1BR0ssSUFBSSxVQUFVLElBQVYsS0FBbUIsUUFBbkIsRUFBNkI7QUFDcEMsV0FBTyxNQUFQLENBQWMsVUFBVSxLQUFWLENBQWQsQ0FEb0M7R0FBakM7Q0FKZ0I7O1FBU2Q7Ozs7Ozs7Ozs7OztBQ1BULElBQUksT0FBTyxTQUFQLElBQU8sQ0FBQyxlQUFELEVBQWtCLGFBQWxCLEVBQWlDLGVBQWpDLEVBQWtELFNBQWxELEVBQWdFO0FBQ3pFLE1BQUksV0FBVyxFQUFFLGVBQUYsQ0FBWCxDQURxRTtBQUV6RSxNQUFJLFNBQVMsRUFBRSxhQUFGLENBQVQsQ0FGcUU7QUFHekUsTUFBSSxjQUFjLEVBQUUsZUFBRixDQUFkLENBSHFFO0FBSXpFLFdBQVMsRUFBVCxDQUFZLE9BQVosRUFBcUIsVUFBUyxLQUFULEVBQWdCO0FBQ25DLFVBQU0sY0FBTixHQURtQztBQUVuQyw0Q0FBaUIsTUFBakIsRUFBeUIsU0FBekIsRUFGbUM7R0FBaEIsQ0FBckIsQ0FKeUU7Q0FBaEU7O1FBVUY7Ozs7Ozs7Ozs7O0FDWlQsSUFBSSxrQkFBa0IsU0FBbEIsZUFBa0IsQ0FBQyxHQUFELEVBQVM7QUFDN0IsT0FBSSxJQUFJLElBQUosSUFBWSxHQUFoQixFQUFxQjtBQUNuQixRQUFJLEtBQUssUUFBTCxDQUFjLFVBQWQsQ0FBSixFQUErQjtBQUM3QixVQUFJLENBQUMsSUFBSSxJQUFKLENBQUQsSUFBYyxPQUFPLElBQUksSUFBSixDQUFQLElBQW9CLFFBQXBCLEVBQThCO0FBQzlDLGdCQUFRLEtBQVIsQ0FBYyxtQkFBZCxFQUQ4QztBQUU5QyxZQUFJLElBQUosSUFBWSxtQkFBWixDQUY4QztPQUFoRDtLQURGO0dBREYsQ0FENkI7QUFTN0IsU0FBTyxHQUFQLENBVDZCO0NBQVQ7O0FBWXRCLElBQUksbUJBQW1CLFNBQW5CLGdCQUFtQixDQUFDLE9BQUQsRUFBYTtBQUNsQyxNQUFJLFlBQVksUUFBUSxTQUFSLENBRGtCO0FBRWxDLE1BQUksQ0FBQyxTQUFELElBQWMsUUFBTyw2REFBUCxJQUFvQixRQUFwQixFQUE4QjtBQUM5QyxZQUFRLFNBQVIsR0FBb0IsRUFBRSxNQUFNLE1BQU4sRUFBdEIsQ0FEOEM7R0FBaEQsTUFHSyxJQUFJLGFBQWEsUUFBTyw2REFBUCxLQUFxQixRQUFyQixFQUErQjtBQUNuRCxRQUFJLE9BQU8sVUFBVSxJQUFWLENBRHdDO0FBRW5ELFFBQUksUUFBUSxVQUFVLEtBQVYsQ0FGdUM7QUFHbkQsUUFBSSxDQUFDLElBQUQsSUFBVSxRQUFRLFFBQVIsSUFBb0IsUUFBUSxNQUFSLEVBQWlCO0FBQ2pELGNBQVEsU0FBUixDQUFrQixJQUFsQixHQUF5QixNQUF6QixDQURpRDtLQUFuRDtBQUdBLFFBQUksU0FBUyxRQUFULEtBQXNCLENBQUMsS0FBRCxJQUFVLE9BQU8sS0FBUCxJQUFnQixRQUFoQixJQUE0QixFQUFFLFFBQVEsQ0FBUixDQUFGLENBQTVELEVBQTJFO0FBQzdFLGNBQVEsU0FBUixDQUFrQixLQUFsQixHQUEwQixJQUExQixDQUQ2RTtLQUEvRTtHQU5HO0FBVUwsU0FBTyxPQUFQLENBZmtDO0NBQWI7O0FBa0J2QixJQUFJLGlCQUFpQixTQUFqQixjQUFpQixDQUFDLE9BQUQsRUFBYTtBQUNoQyxrQkFBZ0IsT0FBaEIsRUFEZ0M7QUFFaEMsbUJBQWlCLE9BQWpCLEVBRmdDO0FBR2hDLFNBQU8sT0FBUCxDQUhnQztDQUFiOztRQU1aOzs7Ozs7O0FDbENULElBQUksVUFBVTtBQUNaLG1CQUFpQixpQkFBakI7QUFDQSxpQkFBZSxRQUFmO0FBQ0EsbUJBQWlCLGdCQUFqQjtBQUNBLG9CQUFrQixrQkFBbEI7QUFDQSxhQUFXO0FBQ1QsVUFBTSxRQUFOO0FBQ0EsV0FBTyxJQUFQO0dBRkY7QUFJQSxjQUFZO0FBQ1YsVUFBTSxTQUFOO0FBQ0EsV0FBTyxJQUFQO0dBRkY7Q0FURTs7QUFlSixJQUFJLFFBQVEsb0JBQVUsT0FBVixDQUFSOztBQUVKLE1BQU0sSUFBTiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgeyBvcHRpb25zQ2hlY2tlciB9IGZyb20gJy4vb3B0aW9ucy1jaGVja2VyJztcbmltcG9ydCB7IG9wZW4gfSBmcm9tICcuL29wZW4tbW9kYWwnO1xuXG5jbGFzcyBNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zQ2hlY2tlcihvcHRpb25zKTtcbiAgICB0aGlzLm9wZW5CdG5TZWxlY3RvciA9IG9wdGlvbnMub3BlbkJ0blNlbGVjdG9yO1xuICAgIHRoaXMubW9kYWxTZWxlY3RvciA9IG9wdGlvbnMubW9kYWxTZWxlY3RvcjtcbiAgICB0aGlzLmNvbnRlbnRTZWxlY3RvciA9IG9wdGlvbnMuY29udGVudFNlbGVjdG9yO1xuICAgIHRoaXMuY2xvc2VCdG5TZWxlY3RvciA9IG9wdGlvbnMuY2xvc2VCdG5TZWxlY3RvcjtcbiAgICB0aGlzLm9wZW5FdmVudCA9IG9wdGlvbnMub3BlbkV2ZW50O1xuICAgIHRoaXMuY2xvc2VFdmVudCA9IG9wdGlvbnMuY2xvc2VFdmVudDtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgcmV0dXJuIG9wZW4oXG4gICAgICB0aGlzLm9wZW5CdG5TZWxlY3RvcixcbiAgICAgIHRoaXMubW9kYWxTZWxlY3RvcixcbiAgICAgIHRoaXMuY29udGVudFNlbGVjdG9yLFxuICAgICAgdGhpcy5vcGVuRXZlbnRcbiAgICApO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAkKHRoaXMubW9kYWxTZWxlY3RvcikuaGlkZSgpO1xuICAgIHRoaXMub3BlbigpO1xuICB9XG59XG5cbmV4cG9ydCB7IE1vZGFsIH07XG5cbiIsIlxudmFyIG9wZW5FdmVudERlY2lkZXIgPSAoJG1vZGFsLCBvcGVuRXZlbnQpID0+IHtcbiAgaWYgKG9wZW5FdmVudC50eXBlID09PSAnc2hvdycpIHtcbiAgICAkbW9kYWwuc2hvdygpO1xuICB9XG4gIGVsc2UgaWYgKG9wZW5FdmVudC50eXBlID09PSAnZmFkZUluJykge1xuICAgICRtb2RhbC5mYWRlSW4ob3BlbkV2ZW50LnNwZWVkKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgb3BlbkV2ZW50RGVjaWRlciB9O1xuIiwiXG5pbXBvcnQgeyBvcGVuRXZlbnREZWNpZGVyIH0gZnJvbSAnLi9vcGVuLWV2ZW50LWRlY2lkZXInO1xuXG52YXIgb3BlbiA9IChvcGVuQnRuU2VsZWN0b3IsIG1vZGFsU2VsZWN0b3IsIGNvbnRlbnRTZWxlY3Rvciwgb3BlbkV2ZW50KSA9PiB7XG4gIGxldCAkb3BlbkJ0biA9ICQob3BlbkJ0blNlbGVjdG9yKTtcbiAgbGV0ICRtb2RhbCA9ICQobW9kYWxTZWxlY3Rvcik7XG4gIGxldCAkY29udGVudEJveCA9ICQoY29udGVudFNlbGVjdG9yKTtcbiAgJG9wZW5CdG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG9wZW5FdmVudERlY2lkZXIoJG1vZGFsLCBvcGVuRXZlbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgb3BlbiB9O1xuIiwiXG52YXIgc2VsZWN0b3JDaGVja2VyID0gKG9iaikgPT4ge1xuICBmb3IodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgaWYgKHByb3AuaW5jbHVkZXMoJ1NlbGVjdG9yJykpIHtcbiAgICAgIGlmICghb2JqW3Byb3BdIHx8IHR5cGVvZiBvYmpbcHJvcF0gIT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBzZWxlY3Rvci4nKTtcbiAgICAgICAgb2JqW3Byb3BdID0gJy5JTlZBTElELVNFTEVDVE9SJztcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJldHVybiBvYmo7XG59O1xuXG52YXIgb3BlbkV2ZW50Q2hlY2tlciA9IChvcHRpb25zKSA9PiB7XG4gIGxldCBvcGVuRXZlbnQgPSBvcHRpb25zLm9wZW5FdmVudDtcbiAgaWYgKCFvcGVuRXZlbnQgfHwgdHlwZW9mIG9wZW5FdmVudCAhPSAnb2JqZWN0Jykge1xuICAgIG9wdGlvbnMub3BlbkV2ZW50ID0geyB0eXBlOiAnc2hvdycgfTtcbiAgfVxuICBlbHNlIGlmIChvcGVuRXZlbnQgJiYgdHlwZW9mIG9wZW5FdmVudCA9PT0gJ29iamVjdCcpIHtcbiAgICBsZXQgdHlwZSA9IG9wZW5FdmVudC50eXBlO1xuICAgIGxldCBzcGVlZCA9IG9wZW5FdmVudC5zcGVlZDtcbiAgICBpZiAoIXR5cGUgfHwgKHR5cGUgIT0gJ2ZhZGVJbicgJiYgdHlwZSAhPSAnc2hvdycpKSB7XG4gICAgICBvcHRpb25zLm9wZW5FdmVudC50eXBlID0gJ3Nob3cnO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2ZhZGVJbicgJiYgKCFzcGVlZCB8fCB0eXBlb2Ygc3BlZWQgIT0gJ251bWJlcicgfHwgIShzcGVlZCA+IDApKSkge1xuICAgICAgb3B0aW9ucy5vcGVuRXZlbnQuc3BlZWQgPSAxMDAwO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb3B0aW9ucztcbn07XG5cbnZhciBvcHRpb25zQ2hlY2tlciA9IChvcHRpb25zKSA9PiB7XG4gIHNlbGVjdG9yQ2hlY2tlcihvcHRpb25zKTsgIFxuICBvcGVuRXZlbnRDaGVja2VyKG9wdGlvbnMpO1xuICByZXR1cm4gb3B0aW9ucztcbn07XG5cbmV4cG9ydCB7IG9wdGlvbnNDaGVja2VyIH07XG4iLCJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vbGliL21vZGFsaXpyL21vZGFsaXpyJztcblxudmFyIG9wdGlvbnMgPSB7XG4gIG9wZW5CdG5TZWxlY3RvcjogJyNvcGVuLW1vZGFsLWJ0bicsXG4gIG1vZGFsU2VsZWN0b3I6ICcjbW9kYWwnLFxuICBjb250ZW50U2VsZWN0b3I6ICcjbW9kYWwtY29udGVudCcsXG4gIGNsb3NlQnRuU2VsZWN0b3I6ICcjbW9kYWwtY2xvc2UtYnRuJyxcbiAgb3BlbkV2ZW50OiB7XG4gICAgdHlwZTogJ2ZhZGVJbicsXG4gICAgc3BlZWQ6IDEwMDBcbiAgfSxcbiAgY2xvc2VFdmVudDoge1xuICAgIHR5cGU6ICdmYWRlT3V0JyxcbiAgICBzcGVlZDogMTAwMFxuICB9XG59O1xuXG52YXIgbW9kYWwgPSBuZXcgTW9kYWwob3B0aW9ucyk7XG5cbm1vZGFsLmluaXQoKTtcblxuIl19
