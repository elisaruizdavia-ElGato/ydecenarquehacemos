// Marcar/desmarcar ingredientes al tocar
document.querySelectorAll('.ingredientes li').forEach(function(li) {
  li.addEventListener('click', function() {
    this.classList.toggle('checked');
  });
});
