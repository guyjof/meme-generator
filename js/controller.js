'use strict'

function initGallery() {
    addListeners()
    renderGallery()

}

function renderGallery() {
    var elGallery = document.querySelector('.gallery');
    var strHtml = '';
    gMemes.forEach((img) => {
        strHtml += `<div class="img-container"><img class="img-${img.id}" src="${img.url}" onclick="onSetImage(${img.id}), onMoveToEditor()"></div>`;
    })
    elGallery.innerHTML = strHtml;
}

getAspectRatio()
function getAspectRatio() {
    for (var i = 0; i < gMemes.length; i++) {
        // var ogImg = document.querySelector('.img-1');
        // console.log(ogImg);
        // var aspect = ogImg.naturalHeight / ogImg.naturalWidth
        // console.log(aspect);
        gMemes[i].aspect = 'size'
    }
}

function onSetImage(id, aspect) {
    var img = {
        id,
        aspect
    }
    saveToStorage('img', img)
}


function onMoveToEditor() {
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