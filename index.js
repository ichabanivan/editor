var bold = document.getElementById('bold'),
    italic = document.getElementById('italic'),
    underline = document.getElementById('underline'),
    fontSize = document.getElementById('fontSize'),
    editor = document.getElementById('editor'),
    color = document.getElementById('color'),
    get = document.getElementById('get');

bold.addEventListener('click', function() {
    document.execCommand ('bold', false, null);
 })
 
italic.addEventListener('click', function() {
  document.execCommand ('italic', false, null);
})

underline.addEventListener('click', function() {
  document.execCommand ('underline', false, null);
})

fontSize.addEventListener('input', function (e) {
  document.execCommand('fontSize', false, e.target.value);
  console.log(e.target.value)
  fontSize.value = 0;
})

color.addEventListener('change', function (e) {
  document.execCommand('foreColor', false, e.target.value);
  color.value = '#000000';
})
 
editor.addEventListener('keydown', function(e) {
  e = e || window.event;
  if (e.shiftKey && e.keyCode == 13) {
    console.log('shift + enter')
    document.execCommand('formatBlock', false, '<p>'); 
  }
})

get.addEventListener('click', function (e) {
  console.log(editor.innerHTML)
  console.log(editor.innerText)

  text.innerHTML = editor.innerHTML;
  formatText.innerHTML = editor.innerText;
})


document.addEventListener('click', function(e) {
  if (e.target.classList.contains('heading')) {
    var data = e.target.dataset.elem;
    document.execCommand ('formatBlock', false, '<'+data+'>');
  }
})
