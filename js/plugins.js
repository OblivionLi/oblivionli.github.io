const gameProjs = document.getElementById('game-projs');

gameProjs.addEventListener('click', e => {
    document.querySelector('.game-projs').classList.toggle('show');
    document.querySelector('.web-projs').classList.toggle('hide');
})