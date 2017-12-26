
function Editor() {
  this.bold = document.getElementById('bold'),
  this.italic = document.getElementById('italic'),
  this.underline = document.getElementById('underline'),
  this.fontSize = document.getElementById('fontSize'),
  this.editor = document.getElementById('editor'),
  this.color = document.getElementById('color'),
  this.get = document.getElementById('get');
  this.clickEvents();
  this.changeEvents();
  this.shiftEnter();
  this.text = document.getElementById('text')
  this.formatText = document.getElementById('formatText')
}

Editor.prototype.setCommand = function (aCommandName, aValueArgument, aShowDefaultUI) {
  aShowDefaultUI = aShowDefaultUI || false;
  aValueArgument = aValueArgument || null;
  document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
}

Editor.prototype.reset = function () {
  fontSize.value = 0;
  color.value = '#000000';
}

Editor.prototype.clickEvents = function () {
  var that = this;

  document.addEventListener('click', function (e) {
    var command = e.target.dataset.command;
    var elem = e.target.dataset.elem;
    if (e.target.classList.contains('heading')) {
      that.setCommand(command, '<' + elem + '>');
    } else if (e.target.classList.contains('btn')) {
      that.setCommand(command)
    } else if (e.target.classList.contains('getData')) {
      console.log(1)
      that.text.innerHTML = that.getText();
      that.formatText.innerHTML = that.getHtml();
    }
   })
}

Editor.prototype.changeEvents = function () {
  var that = this;

  document.addEventListener('change', function (e) {
    var command = e.target.dataset.command;
    var elem = e.target.dataset.elem;

    if (e.target.classList.contains('select')) {
      that.setCommand(command, e.target.value);
      console.log(e.target.value)
    } else if (e.target.classList.contains('input')) {
      that.setCommand(command)
    } 
  })
}

Editor.prototype.changeEvents = function () {
  var that = this;

  document.addEventListener('change', function (e) {
    var command = e.target.dataset.command;
    var elem = e.target.dataset.elem;

    if (e.target.classList.contains('select')) { // FontSize
      console.log(command, e.target.value)
      that.setCommand(command, e.target.value);
    } else if (e.target.classList.contains('input')) {
      that.setCommand(command, e.target.value)
    } 

    that.reset();
  })
}

Editor.prototype.shiftEnter = function () {
  var that = this;

  document.addEventListener('keydown', function (e) {
  e = e || window.event;
    if (e.shiftKey && e.keyCode == 13) {
      console.log('shift + enter')
      that.execCommand('formatBlock', false, '<p>'); 
    }
  })
}

Editor.prototype.getHtml = function () {
  return this.editor.innerHTML
}

Editor.prototype.getText = function () {
  return this.editor.innerText
}

editor = new Editor()
