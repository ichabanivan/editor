function Download(id) {
  this._containerForButton = document.getElementById(id);
  this.download()
}

Download.prototype.download = function (e) {
  this._containerForButton.innerHTML = '<a href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(e ? e.html : '') + '" download="text.html">text.html</a>';
}
