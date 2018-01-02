function Download(id) {
  this.containerForButton = document.getElementById(id);
  this.addBtn()
}

Download.prototype = Object.create(TextArea.prototype);
Download.prototype.constructor = Download;

Download.prototype.addBtn = function () {
  var that = this;
  this.containerForButton.innerHTML = '<a id="downloadBtn" href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent('') + '" download="text.html">text.html</a>';

  var btnContainer = document.getElementById('save')
  
  btnContainer.addEventListener('click', function (e) {
    if (e.target.id === 'downloadBtn') {
      var data = {
        command: 'bold'
      }
      that.emit('setCommand', data)
    }   
  })
}

Download.prototype.download = function (e) {
  this.containerForButton.innerHTML = '<a id="downloadBtn" href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(e.html) + '" download="text.html">text.html</a>';
}
