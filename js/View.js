function View(id) {
  this.elem = document.getElementById(id)
  this.changeEvent();
}

View.prototype = Object.create(TextArea.prototype);
View.prototype.constructor = View;

View.prototype.changeEvent = function () {
  var that = this;

  this.on('changeTextArea', function (e) {
    that.elem.innerText = e.html
  })
}
