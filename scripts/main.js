let modal = document.querySelector(`.modal-panel`);
let modalContent = document.querySelector(`.modal-content`);
let menu = document.querySelector(`.menu-container`);

let textContent = document.createElement(`p`);
textContent.classList.add(`modal-text`);
modalContent.appendChild(textContent);
textContent.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut`;

let showMenuLink = document.getElementById(`showMenuLink`);
let showModalLink = document.getElementById(`showModalLink`);

// Doing this here because viewport width will change over time.
let currentViewportWidth = window.innerWidth;
let viewportThreshold = 736;
 
if (currentViewportWidth <= viewportThreshold) {
    menu.classList.remove(`nav-is-menu`);
    menu.classList.add(`nav-is-side-tray`);
} else if (currentViewportWidth > viewportThreshold) {
    menu.classList.remove(`nav-is-side-tray`);
    menu.classList.add(`nav-is-menu`);
}

showMenuLink.addEventListener(`click`, () => {
    menu.classList.toggle(`hide-menu`);
    menu.classList.toggle(`show-menu`);
});

showModalLink.addEventListener(`click`, () => {
    modal.classList.remove(`hide-modal-panel`);
});

modal.addEventListener(`click`, (e) => {
    // If an element that isn't the parent is clicked on, don't do anything. If only 
    // the parent is clicked on, then it hides.
    if (e.target !== e.currentTarget) return;

    modal.classList.add(`hide-modal-panel`);
});

document.onkeydown = function(e) {
    if (e.key === `Escape` || e.key === `Esc`) {
        modal.classList.add(`hide-modal-panel`);
    }
};

window.addEventListener(`resize`, () => {
    let newViewportWidth = window.innerWidth;

    // Comparing old and new viewport widths to see if it crossed threshold.
    if ((currentViewportWidth < viewportThreshold && newViewportWidth > viewportThreshold) ||
        (currentViewportWidth > viewportThreshold && newViewportWidth < viewportThreshold)) {
        
        document.location.reload(true);
    }
});


