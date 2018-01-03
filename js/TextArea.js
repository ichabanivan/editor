function TextArea(id) {
  this.textField = document.getElementById(id)
  this.inputText()
}

TextArea.prototype = Object.create(App.prototype);
TextArea.prototype.constructor = TextArea;

TextArea.prototype.inputText = function () {
  var that = this;

  var prevKeyCode = null;

  var data = {
    elem: 'p'
  }

  this.textField.addEventListener('keydown', function (e) {
    // The first line will wrap in paragraph (default: no wrap)
    if (that.textField.innerHTML.length === 0) {
      that.emit('formatBlock', data)
    }
    
    // Wrap in a paragraph instead of a div when you press any key after the enter
    if (prevKeyCode) { 
      that.emit('formatBlock', data)
    } 
    
    if (e.keyCode === 13 && document.queryCommandEnabled("formatBlock")) {
      prevKeyCode = 13;
    } else {
      prevKeyCode = null;
    }
  })

  that.textField.addEventListener('input', function (e) {
    var data = {
      html: that.textField.innerHTML
    }

    that.emit('changeText', data)
  })
}

TextArea.prototype.setCommand = function (aCommandName, aValueArgument, aShowDefaultUI) {
  aShowDefaultUI = aShowDefaultUI || false;
  aValueArgument = aValueArgument || null;
  document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
}
