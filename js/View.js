function View(id) {
  this.elem = document.getElementById(id)
  this.changeEvent();
}

View.prototype.changeEvent = function () {
  var that = this;

  event.on('changeTextArea', function (e) {
    that.elem.innerText = e.html
  })
}
