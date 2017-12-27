function Editor() {
  this.initListener()
}

Editor.prototype.initListener = function () {
  event.on('bold', function (data) {
    event.emit('boldText', data)
  })

  event.on('italic', function (data) {
    event.emit('italicText', data)
  })

  event.on('underline', function (data) {
    event.emit('underlineText', data)
  })

  event.on('changeText', function (data) {
    event.emit('changeTextDownload', data)
    event.emit('changeTextInField', data)
  })

  event.on('formatBlock', function (data) {
    event.emit('formatBlockInField', data)
  })
}
