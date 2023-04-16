let modal = document.querySelector('.modal-content-pane');
let modalBox = document.querySelector('.modal-panel');
let modalContent = document.querySelector('.modal-content');

let showMenuLink = document.getElementById(`showMenuLink`);
let showModalLink = document.getElementById(`showModalLink`);

showMenuLink.addEventListener('click', () => {
    alert("Testing Menu");
});

showModalLink.addEventListener('click', () => {
    alert("Testing");
});

