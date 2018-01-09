function Options() {
  this.clickEvents()
  this.changeEvents()
}

for (var key in eventMixin) {
  Options.prototype[key] = eventMixin[key];
}

Options.prototype.clickEvents = function () {
  var that = this;

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn')) {
      var command = e.target.dataset.command; // bold, italic, underline

      that.emit(command)
    }
  })
};

Options.prototype.changeEvents = function () {
  var that = this;

  heading.addEventListener('change', function (e) {
    var heading =  e.target.value; // h1-h6

    that.emit(heading)

    // Reset
    e.target.value = 0;
  })
};
