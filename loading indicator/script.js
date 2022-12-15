
const spin = document.querySelector('.spin');
const load = document.querySelector('.load');

document.querySelector('.hide-loader')
    .addEventListener('click', () => {
        spin.classList.add('hidden');
        load.classList.add('hidden')
})

document.querySelector('.show-loader')
    .addEventListener('click', () => {
        spin.classList.remove('hidden');
        load.classList.remove('hidden')
})