hljs.tabReplace = '  ';
hljs.initHighlightingOnLoad();

document.addEventListener("keydown", function ( event ) {
  if ( (event.keyCode == 9) || (event.keyCode == 32) || (event.keyCode == 34) || (event.keyCode == 39) || (event.keyCode == 40) )
  {
    var bar = document.getElementById('presentation-progress');
    bar.value += 1;
  }
  else if ((event.keyCode == 37) || (event.keyCode == 38) || (event.keyCode == 33))
  {
    var bar = document.getElementById('presentation-progress');
    bar.value -= 1;
  }
});


window.onload = function()
{
  var articles  = document.getElementsByTagName('article');
  document.getElementById('presentation-progress').setAttribute('max', articles.length);
}