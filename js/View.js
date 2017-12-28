function View(id) {
  this._elem = document.getElementById(id)
}

View.prototype.changeEvent = function (e) {
  this._elem.innerText = e.html
}
