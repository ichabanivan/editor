function View(id) {
  this.elem = document.getElementById(id)
}

View.prototype.changeEvent = function (e) {
  this.elem.innerText = e.html
}
