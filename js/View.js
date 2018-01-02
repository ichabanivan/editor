function View(id) {
  this.elem = document.getElementById(id)
}

View.prototype = Object.create(TextArea.prototype);
View.prototype.constructor = View;

View.prototype.changeText = function (e) {
  this.elem.innerText = e.html
}
