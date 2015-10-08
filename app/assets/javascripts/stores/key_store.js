(function(root) {
  'use strict';

  var _keys = [];

  root.KeyStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _keys.slice();
    },

    addChangeHandler: function(handler) {
      //"string" might be a particular frequency
      KeyStore.on("CHANGE", handler);
      //KeyStore.on(string, handler);
    },

    removeChangeHandler: function(handler) {
      KeyStore.removeListener("CHANGE", handler)
    },

    changed: function() {
      KeyStore.emit("CHANGE");
    }
  });

  AppDispatcher.register(function(action) {
    switch(action.actionType) {

      case 'start':
        _keys.push(action.noteName);
        KeyStore.changed();
        // console.log(action.noteName);
        break;

      case 'stop':
        var idx = _keys.indexOf(action.noteName);
        _keys.splice(idx, 1);
        KeyStore.changed();
        break;
    }
  });

}(this));
