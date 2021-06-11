'use strict'

function initGallery() {
    addListeners()
    renderGallery()
}

function renderGallery() {
    var elGallery = document.querySelector('.gallery');
    var strHtml = '';
    gMemes.forEach((img) => {
        strHtml += `<div class="img-container" style="cursor:pointer;"><img class="img-${img.id}" src="${img.url}" onclick="onSetImage(${img.id}), onGetAspect(this), onMoveToEditor()"></div>`;
    })
    elGallery.innerHTML = strHtml;
}

function onSetImage(id) {
    var img = id
    saveToStorage('img', img)
}

function onMoveToEditor(img) {
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

function onGetAspect(e) {
    const canvasW = 540;
    var imgW = e.naturalWidth;
    var imgH = e.naturalHeight;
    var canvasH = (imgH * canvasW) / imgW
    saveToStorage('canvasH', canvasH)

}


const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
let isMenuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!isMenuOpen) {
        menuBtn.classList.add('clicked');
        menu.classList.add('open')
        isMenuOpen = true
    } else {
        menuBtn.classList.remove('clicked');
        menu.classList.remove('open')
        isMenuOpen = false
    }
});

