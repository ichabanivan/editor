function App(data) {
  this.initListener()
}

App.prototype = Object.create(EventEmmiter.prototype);
App.prototype.constructor = App;

App.prototype.initListener = function () {
  // bold, italic, underline
  this.on('setCommand', function (data) {
    text.setCommand(data.command)
  })

  // h1-h6, p
  this.on('formatBlock', function (data) {
    text.setCommand('formatBlock', '<' + data.elem + '>')
  })

  this.on('changeText', function (e) {
    download.download(e)
    view.changeText(e)
  })
}
