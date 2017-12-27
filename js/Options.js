function Options() {
  this.clickEvents()
  this.changeEvents()
}

Options.prototype.clickEvents = function () {
  var that = this;

  var bold = new Event("bold");
  var italic = new Event("italic");
  var underline = new Event("underline");

  document.addEventListener('click', function (e) {
    var command = e.target.dataset.command;
    if (e.target.classList.contains('btn') && command === "bold") {
      bold.detail = {
          selectedText: window.getSelection().toString()
      }
      document.dispatchEvent(bold);
    } else if (e.target.classList.contains('btn') && command === "italic") {
      italic.detail = {
          selectedText: window.getSelection().toString()
      }
      document.dispatchEvent(italic);
    } else if (e.target.classList.contains('btn') && command === "underline") {
      underline.detail = {
          selectedText: window.getSelection().toString()
      }
      document.dispatchEvent(underline);
    }
  })
}

Options.prototype.changeEvents = function () {
  var that = this;

  var h1 = new Event("h1");
  var h2 = new Event("h2");
  var h3 = new Event("h3");
  var h4 = new Event("h4");
  var h5 = new Event("h5");
  var h6 = new Event("h6");

  document.addEventListener('change', function (e) {
    var command = e.target.dataset.command;
    var value = e.target.value;

    if (e.target.classList.contains('select') && value === "h1") {
      document.dispatchEvent(h1);
    } else if (e.target.classList.contains('select') && value === "h2") {
      document.dispatchEvent(h2);
    } else if (e.target.classList.contains('select') && value === "h3") {
      document.dispatchEvent(h3);
    } else if (e.target.classList.contains('select') && value === "h4") {
      document.dispatchEvent(h4);
    } else if (e.target.classList.contains('select') && value === "h5") {
      document.dispatchEvent(h5);
    } else if (e.target.classList.contains('select') && value === "h6") {
      document.dispatchEvent(h6);
    }

    // Reset
    e.target.value = 0;
  })   
}
