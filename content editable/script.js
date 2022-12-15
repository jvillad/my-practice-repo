
const theContent = document.querySelector('.content');
const modal = document.querySelector('.modal-container')
const input = document.querySelector('.input');

document.querySelector('.edit').addEventListener('click', () => {

    modal.style.display = 'block';
    input.value = `${theContent.textContent}`
    input.contentEditable = true;

    const end = input.value.length
    document.querySelector('.input').focus();
    document.querySelector('.input').setSelectionRange(end, end);
    
})

document.querySelector('.save').addEventListener('click', () => {

    modal.style.display = 'none';
    theContent.textContent = input.value;

})