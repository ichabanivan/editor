function Text(id) {
  this.textField = document.getElementById(id)
  this.inputText()
}

Text.prototype.inputText = function () {
  var that = this;

  var prevKeyCode = null;

  var data = {
    elem: 'p',
    data: that.textField.innerHTML
  }

  this.textField.addEventListener('keydown', function (e) {
    if (prevKeyCode) {
      event.emit('formatBlock', data)
    }

    if (e.keyCode === 13 && document.queryCommandEnabled("formatBlock")) {
      prevKeyCode = 13;
    } else {
      prevKeyCode = null;
    }

    if (that.textField.innerHTML.length === 0) {
      event.emit('formatBlock', data)
    }
  })

  that.textField.addEventListener('input', function (e) {
    var data = {
      html: that.textField.innerHTML
    }

    event.emit('changeText', data)
  })
}

Text.prototype.setCommand = function (aCommandName, aValueArgument, aShowDefaultUI) {
  aShowDefaultUI = aShowDefaultUI || false;
  aValueArgument = aValueArgument || null;
  document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
}
