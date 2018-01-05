function App() {
  this.options = new Options();
  this.text = new TextArea();
  this.download = new Download();
  this.view = new View();

  this.init()
}

App.prototype.init = function () {
  var that = this;

  this.options.on('bold', function () {
    that.text.setCommand('bold')
  })

  this.options.on('italic', function () {
    that.text.setCommand('italic')
  })

  this.options.on('underline', function () {
    that.text.setCommand('underline')
  })

  this.text.on('p', function () {
    that.text.setCommand('formatBlock', '<p>')
  })

  this.options.on('h1', function () {
    that.text.setCommand('formatBlock', '<h1>')
  })

  this.options.on('h2', function () {
    that.text.setCommand('formatBlock', '<h2>')
  })

  this.options.on('h3', function () {
    that.text.setCommand('formatBlock', '<h3>')
  })

  this.options.on('h4', function () {
    that.text.setCommand('formatBlock', '<h4>')
  })

  this.options.on('h5', function () {
    that.text.setCommand('formatBlock', '<h5>')
  })

  this.options.on('h6', function () {
    that.text.setCommand('formatBlock', '<h6>')
  })

  // bold - on click download button
  this.download.on('bold', function () {
    that.text.setCommand('bold')
  })

  // Download and preview
  this.text.on('changeText', function (e) {
    that.download.download(e)
    that.view.changeText(e)
  })
}
