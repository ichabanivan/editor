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
    console.log('setCommand')
    that.text.setCommand(data.command)
  })

  this.on('formatBlock', function (data) {
    that.text.setCommand('formatBlock', '<' + data.elem + '>')
  })

  this.on('changeText', function (e) {
    that.download.download(e)
    that.view.changeText(e)
  })
}

App.prototype.emit = function (type) {
  const onfunc = 'on' + type;

  var len = arguments.length,
      args = Array(len > 1 ? len - 1 : 0)

  for (var i = 1; i < len; i++) {
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
