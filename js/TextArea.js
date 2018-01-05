function TextArea() {
  this.textField = document.getElementById('editor');
  this.inputText()
}

for (var key in eventMixin) {
  TextArea.prototype[key] = eventMixin[key];
}

TextArea.prototype.inputText = function () {
  var that = this;

  var prevKeyCode = null;

  this.textField.addEventListener('keydown', function (e) {
    // The first sentence will wrap in paragraph (default: no wrap)
    if (that.textField.innerHTML.length === 0) {
      that.emit('p')
    }

    // Wrap in a paragraph instead of a div when you press any key after the enter (default: div)
    if (prevKeyCode) {
      that.emit('p')
    }

    if (e.keyCode === 13 && document.queryCommandEnabled("formatBlock")) {
      prevKeyCode = 13;
    } else {
      prevKeyCode = null;
    }
  })

  that.textField.addEventListener('input', function (e) {
    var html = that.textField.innerHTML;
    that.emit('changeText', html)
  })
}

TextArea.prototype.setCommand = function (aCommandName, aValueArgument, aShowDefaultUI) {
  aShowDefaultUI = aShowDefaultUI || false;
  aValueArgument = aValueArgument || null;
  document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
}
