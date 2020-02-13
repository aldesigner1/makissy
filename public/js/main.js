//Select element function

const selectElement = function (e) {

    return document.querySelector(e);
}

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('#body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
})
