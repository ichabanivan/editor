function Text(id) {
    this.textField = document.getElementById(id)
    this.initListener()
    this.inputText()
}

Text.prototype.inputText = function () {
    var that = this;
    var p = new Event("p");

    var changeText = new Event("changeText");

    this.textField.addEventListener('input', function (e) {
       
        changeText.detail = {
            html: that.textField.innerHTML
        }

        document.dispatchEvent(changeText);
    })

    document.addEventListener('keydown', function (e) {
        document.dispatchEvent(p);
    })

}

Text.prototype.setCommand = function (aCommandName, aValueArgument, aShowDefaultUI) {
    aShowDefaultUI = aShowDefaultUI || false;
    aValueArgument = aValueArgument || null;
    document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
}

Text.prototype.initListener = function () {
    var that = this;

    document.addEventListener('p', function (e) {
        that.setCommand('formatBlock', '<p>')
    })

    document.addEventListener('bold', function (e) {
        that.setCommand('bold')
        console.log(1)
    })

    document.addEventListener('italic', function (e) {
        that.setCommand('italic')
    })

    document.addEventListener('underline', function (e) {
        that.setCommand('underline')
    })

    document.addEventListener('h1', function (e) {
        that.setCommand('formatBlock', 'h1')
    })

    document.addEventListener('h2', function (e) {
        that.setCommand('formatBlock', 'h2')
    })

    document.addEventListener('h3', function (e) {
        that.setCommand('formatBlock', 'h3')
    })

    document.addEventListener('h4', function (e) {
        that.setCommand('formatBlock', 'h4')
    })

    document.addEventListener('h5', function (e) {
        that.setCommand('formatBlock', 'h5')
    })

    document.addEventListener('h6', function (e) {
        that.setCommand('formatBlock', 'h6')
    })
}
