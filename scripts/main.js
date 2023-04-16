let modal = document.querySelector('.modal-panel');
let modalContent = document.querySelector('.modal-content');

let showMenuLink = document.getElementById(`showMenuLink`);
let showModalLink = document.getElementById(`showModalLink`);

showMenuLink.addEventListener('click', () => {
    alert("Testing Menu");
});

showModalLink.addEventListener('click', () => {
    modal.classList.remove(`hide-modal-panel`);
});

