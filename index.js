function Editor(id) {
  this.editor = document.getElementById(id);
  this.saveBtn = document.getElementById('save');
  this.html = this.editor.innerHTML || '';
  this.text = this.editor.innerText || '';

  this.textField = document.getElementById('text');
}

Editor.prototype.setCommand = function (aCommandName, aValueArgument, aShowDefaultUI) {
  aShowDefaultUI = aShowDefaultUI || false;
  aValueArgument = aValueArgument || null;
  document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
}

Editor.prototype.getHtml = function () {
  return this.editor.innerHTML
}

Editor.prototype.result = function () {
  this.html = this.getHtml();
  this.textField.innerText = this.html;
}

Editor.prototype.download = function () {
  this.saveBtn.innerHTML = '<a href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(this.html) + '" download="text.html">text.html</a>';
}  

Editor.prototype.getText = function () {
  return this.editor.innerText
}

function Options(id) {
  Editor.call(this, id);
  
  this.clickEvents();
  this.changeEvents();

  this.bold = document.getElementById('bold'),
  this.italic = document.getElementById('italic'),
  this.underline = document.getElementById('underline'),
  this.heading = document.getElementById('heading');

  this.get = document.getElementById('get');
}

Options.prototype = Object.create(Editor.prototype);
Options.prototype.constructor = Options;


Options.prototype.reset = function () {
  this.heading.value = 0;
}

Options.prototype.clickEvents = function () {
  var that = this;

  document.addEventListener('click', function (e) {
    var command = e.target.dataset.command;
    var elem = e.target.dataset.elem;
    if (e.target.classList.contains('btn')) {
      that.setCommand(command)
    } else if (e.target.classList.contains('getData')) {
      console.log(that.textField)
      that.textField.innerText = that.getHtml();
      that.result();
    }
  })
}

Options.prototype.changeEvents = function () {
  var that = this;

  document.addEventListener('change', function (e) {
    var command = e.target.dataset.command;
    var elem = e.target.dataset.elem;

    if (e.target.classList.contains('select')) {
      that.setCommand(command, e.target.value);
      console.log(e.target.value)
    }

    that.reset();
  })
}

function Text(id) {
  Editor.call(this, id);
  this.enter();
  this.input();
}

Text.prototype = Object.create(Editor.prototype);
Text.prototype.constructor = Text;

Text.prototype.enter = function () {
  var that = this;

  document.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
      that.setCommand('formatBlock', '<p>');
    }
  })
}

Text.prototype.input = function () {
  var that = this;

  document.addEventListener('input', function (e) {
    console.log(that.html)
    // that.
    that.result();
    that.download();
  })
}


editor = new Editor('editor')
option = new Options('editor')
text = new Text('editor')
