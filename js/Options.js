function Options() {
  this.eventEmmiter = new EventEmmiter();
  this.clickEvents()
  this.changeEvents()
}

Options.prototype.clickEvents = function () {
  var that = this;

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn')) {
      var command = e.target.dataset.command; // bold, italic, underline

      that.eventEmmiter.emit(command)
    }
  })
}

Options.prototype.changeEvents = function () {
  var that = this;

  heading.addEventListener('change', function (e) {
    var heading =  e.target.value; // h1-h6

    that.eventEmmiter.emit(heading)

    // Reset
    e.target.value = 0;
  })
}
