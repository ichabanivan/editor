function App(data) {
  this.options = new Options();
  this.text = new TextArea(data.editor);
  this.download = new Download(data.save);
  this.view = new View(data.result);
  this.init()
}

for (var key in EventEmmiterMixin) {
  App.prototype[key] = EventEmmiterMixin[key];
}

App.prototype.init = function () {
  var that = this;

  // bold, italic, underline
  this.options.on('setCommand', function (data) {
    that.text.setCommand(data.command)
  })

  // p
  this.text.on('formatBlock', function () {
    that.text.setCommand('formatBlock', '<p>')
  })

  // h1-h6
  this.options.on('formatBlock', function (heading) {
    that.text.setCommand('formatBlock', '<' + heading + '>')
  })

  // Download and preview
  this.text.on('changeText', function (e) {
    that.download.download(e)
    that.view.changeText(e)
  })
}
