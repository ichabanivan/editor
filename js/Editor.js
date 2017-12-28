function Editor() {
  this.initListener()
}

Editor.prototype.initListener = function () {
  event.on('setCommand', function (data) {
    event.emit('setCommandMain', data)
  })

  event.on('changeText', function (data) {
    event.emit('changeTextDownload', data)
    event.emit('changeTextInField', data)
  })

  event.on('formatBlock', function (data) {
    event.emit('formatBlockInField', data)
  })
}
