class EventEmmiter {
  constructor() {
    this._listeners = {};
  }

  emit(type) {
    const onfunc = 'on' + type;

    let len = arguments.length,
      args = Array(len > 1 ? len - 1 : 0);

    for (let i = 1; i < len; i++) {
      args[i - 1] = arguments[i];
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

  on(type, listener) {
    if ('function' !== typeof listener) {
      throw new TypeError('listener must be a function');
    }

    if (!this._listeners.hasOwnProperty(type)) {
      this._listeners[type] = [];
    }

    this._listeners[type].push(listener);

    return this;
  }
}

export default EventEmmiter;
