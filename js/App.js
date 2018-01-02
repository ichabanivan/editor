function App(data) {
  this.text = new TextArea(data.editor);
  this.options = new Options();
  this.view = new View(data.result);
  this.download = new Download(data.save);
  this.initListener()
}

App.prototype._listeners = new Object();

App.prototype.initListener = function () {
  var that = this;

  this.on('setCommand', function (data) {
    that.text.setCommand(data.command)
  })

  this.on('formatBlock', function (data) {
    that.text.setCommand('formatBlock', '<' + data.elem + '>')
  })

  this.on('changeText', function (e) {
    that.emit('changeTextDownload', e)
    that.emit('changeTextArea', e)
  })
}

App.prototype.emit = function (type) {
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

App.prototype.on = function (type, listener) {
  if ('function' !== typeof listener) {
    throw new TypeError('listener must be a function');
  }

  if (!this._listeners.hasOwnProperty(type)) {
    this._listeners[type] = [];
  }

  this._listeners[type].push(listener);

  return this;
}
