function Download(id) {
  this.containerForButton = document.getElementById(id);
  this.addBtn()
}

Download.prototype = Object.create(TextArea.prototype);
Download.prototype.constructor = Download;

Download.prototype.addBtn = function () {
  this.containerForButton.innerHTML = '<a href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent('') + '" download="text.html">text.html</a>';
}

Download.prototype.download = function (e) {
  this.containerForButton.innerHTML = '<a href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(e.html) + '" download="text.html">text.html</a>';
}
