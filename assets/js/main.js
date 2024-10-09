/**
 * add event listener for multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.addEventListener(eventType, callback);
    }
}


/**
 * GET ELEMENT
 */

const /** {NodeElement} */ header = document.querySelector('[data-header]');
const /** {NodeElement} */ navbar = document.querySelector('[data-navbar]');
const /** {NodeElement} */ navToggleBtn = document.querySelectorAll('[data-nav-toggler]');
const /** {NodeElement} */ overlay = document.querySelector('[data-overlay]');


const navToggle = function () {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('mobile-menu-open');
}

addEventOnElements(navToggleBtn, 'click', navToggle);


/**
 * HEADER STATE
 */

window.addEventListener('scroll', e => {
    if (this.scrollY >= 50) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
})




/**
 * CLONE ELEMENT
 */

const titleWrapper = document.querySelector("[data-hidden-search-icon]");

const searchIconClone = document.querySelector("[data-search-icon]").cloneNode(true);

titleWrapper.appendChild(searchIconClone);