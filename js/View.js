function View() {
  this.elem = document.getElementById('result')
}

View.prototype.changeText = function (html) {
  this.elem.innerText = html
}
