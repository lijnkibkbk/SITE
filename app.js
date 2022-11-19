const knopka = document.querySelector('#knopka');
const menu = document.querySelector('#menu');

knopka.addEventListener('click', () => {
    menu.classList.toggle('disp');
});
