function Editor() {
  this.initListener()
}

Editor.prototype.initListener = function () {
  var that = this;

  event.on('setCommand', function (data) {
    text.setCommand(data.command)
  })

  event.on('formatBlock', function (data) {
    text.setCommand('formatBlock', '<' + data.elem + '>')
  })

  event.on('changeText', function (e) {
    event.emit('changeTextDownload', e)
    event.emit('changeTextArea', e)
  })
}
