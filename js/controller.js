'use strict'

function initGallery() {
    addListeners()
    renderGallery()

}

function renderGallery() {
    var elGallery = document.querySelector('.gallery');
    var strHtml = '';
    gMemes.forEach((img) => {
        strHtml += `<div class="img-container"><img src="${img.url}" onclick="onSetImage(${img.id}), onMoveToEditor(${img.id})"></div>`;
    })
    elGallery.innerHTML = strHtml;
}

function onSetImage(id) {
    saveToStorage('img', id)
}


function onMoveToEditor(id) {
    window.location.replace("pages/editor.html");
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
}

function addMouseListeners() {
    // gCanvas.addEventListener('mousedown', onAddImage);
    // gCanvas.addEventListener('mouseup', endPos);
    // gCanvas.addEventListener('mousemove', draw);
}

function addTouchListeners() {
    // gCanvas.addEventListener('touchstart', startPos);
    // gCanvas.addEventListener('touuchend', endPos);
    // gCanvas.addEventListener('touchmove', draw);
}