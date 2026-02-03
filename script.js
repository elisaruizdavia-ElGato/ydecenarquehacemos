// Obtén todos los elementos de lista por su clase
const items = document.querySelectorAll('.item');

// Agrega un event listener a cada elemento de lista
items.forEach(item => {
    item.addEventListener('click', () => {
        // Toggle (alternar) la clase 'tachado' en el elemento de lista clicado
        item.classList.toggle('tachado');
    });
});
