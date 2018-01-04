function App() {
  this.options = new Options();
  this.text = new TextArea();
  this.download = new Download();
  this.view = new View();

  this.init()
}

App.prototype.init = function () {
  var that = this;

  // bold
  this.options.on('bold', function () {
    that.text.setCommand('bold')
  })

  // italic
  this.options.on('italic', function () {
    that.text.setCommand('italic')
  })

  // underline
  this.options.on('underline', function () {
    that.text.setCommand('underline')
  })

  // p
  this.text.on('p', function () {
    that.text.setCommand('formatBlock', '<p>')
  })

  // h1
  this.options.on('h1', function () {
    that.text.setCommand('formatBlock', '<h1>')
  })

  // h2
  this.options.on('h2', function () {
    that.text.setCommand('formatBlock', '<h2>')
  })

  // h3
  this.options.on('h3', function () {
    that.text.setCommand('formatBlock', '<h3>')
  })

  // h4
  this.options.on('h4', function () {
    that.text.setCommand('formatBlock', '<h4>')
  })

  // h5
  this.options.on('h5', function () {
    that.text.setCommand('formatBlock', '<h5>')
  })

  // h6
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
