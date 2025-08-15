const click = document.querySelector('.gift-trigger'); // Renomeado para refletir a mudança no CSS
const giftBox = document.querySelector('.gift-box');
const shadow = document.querySelector('.shadow'); // Corrigido para minúsculo
const giftContainer = document.querySelector('.gift-container');
const text = document.querySelector('.text');

click.addEventListener('click', () => {
    // Alterna a classe 'active' em todos os elementos
    click.classList.toggle('active');
    giftBox.classList.toggle('active');
    shadow.classList.toggle('active');
    giftContainer.classList.toggle('active');
    text.classList.toggle('active');
    text.classList.toggle('active2');
});
