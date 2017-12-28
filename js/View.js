function View(id) {
  this.elem = document.getElementById(id)
  this.changeEvent();
}

View.prototype.changeEvent = function () {
  var that = this;

  event.on('changeText', function (e) {
    that.elem.innerText = e.html
  })
}
