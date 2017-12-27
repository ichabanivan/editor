function Download(id) {
    this.containerForButton = document.getElementById(id);
    this.addBtn()
    this.download()
}

Download.prototype.addBtn = function () {
    this.containerForButton.innerHTML = '<a href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent('') + '" download="text.html">text.html</a>';
}

Download.prototype.download = function () {
    var that = this;
    
    document.addEventListener('changeText', function (e) {
        that.containerForButton.innerHTML = '<a href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(e.detail.html) + '" download="text.html">text.html</a>';
    })
}
