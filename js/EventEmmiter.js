function EventEmitter() {
  this._listeners = {};
}

// Add listeners
EventEmitter.prototype.on = function (type, listener) {
  if ('function' !== typeof listener) {
    throw new TypeError('listener must be a function');
  }

  if (!this._listeners.hasOwnProperty(type)) {
    this._listeners[type] = [];
  }

  this._listeners[type].push(listener);
  
  return this;
}

// Remove listeners
EventEmitter.prototype.off = function (type, listener) {
  if (!arguments.length) {
    this._listeners = {};
  } else if (arguments.length === 1) {
    if (this._listeners.hasOwnProperty(type)) {
      delete this._listeners[type];
    }
  } else if (this._listeners.hasOwnProperty(type)) {
    const listeners = this._listeners[type];
    let i = listeners.length;

    while (i--) {
      if (listener === listeners[i]) {
        listeners.splice(i, 1);
      }
    }
    
    if (!listeners.length) {
      delete this._listeners[type];
    }
  }

  return this;
}

// Create event
EventEmitter.prototype.emit = function(type) {
  const onfunc = 'on' + type;

  var _len = arguments.length, 
  args = Array(_len > 1 ? _len - 1 : 0)

  for (var _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (this.hasOwnProperty(onfunc) && 'function' === typeof this[onfunc]) {
    this[onfunc].apply(this, args);
  }

  if (this._listeners.hasOwnProperty(type)) {
    for (const listener of this._listeners[type]) {
      listener.apply(this, args);
    }
  }

  return this;
}
