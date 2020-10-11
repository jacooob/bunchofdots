const bg = document.querySelector('#bg');

$('#navigation').draggable({
  containment: 'document',
});

$(document).ready(function() {
  setTimeout(function() {
    $('#navigation').toggle('slide',500);
  }, 1000);
});

function openPage(v) {
  $('#page'+v).toggle('slide',500);
}
