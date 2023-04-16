let modal = document.querySelector('.modal-panel');
let modalContent = document.querySelector('.modal-content');

let textContent = document.createElement('p');
modalContent.appendChild(textContent);
textContent.innerHTML = "Hi, my name is Brecon";



let showMenuLink = document.getElementById(`showMenuLink`);
let showModalLink = document.getElementById(`showModalLink`);

showMenuLink.addEventListener('click', () => {
    alert("Testing Menu");
});

showModalLink.addEventListener('click', () => {
    modal.classList.remove(`hide-modal-panel`);
});

modal.addEventListener('click', (e) => {
    // If an element that isn't the parent is clicked on, don't do anything. If only 
    // the parent is clicked on, then it hides.
    if (e.target !== e.currentTarget) return;

    modal.classList.add(`hide-modal-panel`);
});

document.onkeydown = function(e) {
    if (e.key === "Escape" || e.key === "Esc") {
        modal.classList.add("hide-modal-panel");
    }
}



