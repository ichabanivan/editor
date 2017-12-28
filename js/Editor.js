function Editor() {
  this.initListener()
}

Editor.prototype.setCommand = function (aCommandName, aValueArgument, aShowDefaultUI) {
  aShowDefaultUI = aShowDefaultUI || false;
  aValueArgument = aValueArgument || null;
  document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
}

Editor.prototype.initListener = function () {
  var that = this;

  event.on('setCommand', function (data) {
    that.setCommand(data.command)
  })

  event.on('formatBlock', function (data) {
    that.setCommand('formatBlock', '<' + data.elem + '>')
  })
}
