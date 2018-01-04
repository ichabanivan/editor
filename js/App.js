function App() {
  this.options = new Options();
  this.text = new TextArea();
  this.download = new Download();
  this.view = new View();

  this.init()
}

App.prototype.init = function () {
  var that = this;

  this.options.eventEmmiter.on('bold', function () {
    that.text.setCommand('bold')
  })

  this.options.eventEmmiter.on('italic', function () {
    that.text.setCommand('italic')
  })

  this.options.eventEmmiter.on('underline', function () {
    that.text.setCommand('underline')
  })

  this.text.eventEmmiter.on('p', function () {
    that.text.setCommand('formatBlock', '<p>')
  })

  this.options.eventEmmiter.on('h1', function () {
    that.text.setCommand('formatBlock', '<h1>')
  })

  this.options.eventEmmiter.on('h2', function () {
    that.text.setCommand('formatBlock', '<h2>')
  })

  this.options.eventEmmiter.on('h3', function () {
    that.text.setCommand('formatBlock', '<h3>')
  })

  this.options.eventEmmiter.on('h4', function () {
    that.text.setCommand('formatBlock', '<h4>')
  })

  this.options.eventEmmiter.on('h5', function () {
    that.text.setCommand('formatBlock', '<h5>')
  })

  this.options.eventEmmiter.on('h6', function () {
    that.text.setCommand('formatBlock', '<h6>')
  })

  // bold - on click download button
  this.download.eventEmmiter.on('bold', function () {
    that.text.setCommand('bold')
  })

  // Download and preview
  this.text.eventEmmiter.on('changeText', function (e) {
    that.download.download(e)
    that.view.changeText(e)
  })
}
