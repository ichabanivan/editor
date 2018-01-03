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
        command: e.target.dataset.command // bold, italic, underline
      }

      that.emit('setCommand', data)
    }
  })
}

Options.prototype.changeEvents = function () {
  var that = this;

  heading.addEventListener('change', function (e) {
    var data = {
      elem: e.target.value // h1 - h6
    }

    that.emit('formatBlock', data)

    // Reset
    e.target.value = 0;
  })   
}
