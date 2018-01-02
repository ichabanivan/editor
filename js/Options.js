function Options() {
  this.clickEvents()
  this.changeEvents()
}

Options.prototype = Object.create(App.prototype);
Options.prototype.constructor = Options;

Options.prototype.clickEvents = function () {
  var that = this;

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn')) {
      var data = {
        command: e.target.dataset.command,
        selectedText: window.getSelection().toString()
      }

      that.emit('setCommand', data)
    }
  })
}

Options.prototype.changeEvents = function () {
  var that = this;

  document.addEventListener('change', function (e) {
    if (e.target.classList.contains('select')) {
      var command = e.target.dataset.command;

      var data = {
        elem: e.target.value
      }

      that.emit(command, data)

      // Reset
      e.target.value = 0;
    }
  })   
}
