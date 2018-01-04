function Download() {
  this.containerForButton = document.getElementById('save');
  this.addBtn()
}

for (var key in eventMixin) {
  Download.prototype[key] = eventMixin[key];
}

Download.prototype.addBtn = function () {
  var that = this;

  this.containerForButton.innerHTML = '<a id="downloadBtn" href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent('') + '" download="text.html">text.html</a>';

  // Emit a bold event on click download button
  this.containerForButton.addEventListener('click', function (e) {
    if (e.target.id === 'downloadBtn') {
      that.emit('bold')
    }
  })
}

Download.prototype.download = function (html) {
  this.containerForButton.innerHTML = '<a id="downloadBtn" href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(html) + '" download="text.html">text.html</a>';
}
