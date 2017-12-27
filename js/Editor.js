function Editor() {
    this.initListener()
}

Editor.prototype.initListener = function () {
    document.addEventListener('p', function (e) {
        // console.log(e.detail)
    })

    document.addEventListener('bold', function (e) {
        console.log(e.detail)
    })

    document.addEventListener('italic', function (e) {
        console.log(e.detail)
    })

    document.addEventListener('underline', function (e) {
        console.log(e.detail)
    })

    document.addEventListener('h1', function (e) {
        // console.log(e.detail)
    })

    document.addEventListener('h2', function (e) {
        // console.log(e.detail)
    })

    document.addEventListener('h3', function (e) {
        // console.log(e.detail)
    })

    document.addEventListener('h4', function (e) {
        // console.log(e.detail)
    })

    document.addEventListener('h5', function (e) {
        // console.log(e.detail)
    })

    document.addEventListener('h6', function (e) {
        // console.log(e.detail)
    })
}
