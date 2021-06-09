'use strict'
const g = 'YASSSS'
var gCanvas;
var gCtx;

function init() {
    gCanvas = document.querySelector('canvas');
    gCtx = gCanvas.getContext('2d')
    addListeners()
}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
}

function addMouseListeners() {
    // gCanvas.addEventListener('mousedown', startPos);
    // gCanvas.addEventListener('mouseup', endPos);
    // gCanvas.addEventListener('mousemove', draw);
}

function addTouchListeners() {
    // gCanvas.addEventListener('touchstart', startPos);
    // gCanvas.addEventListener('touuchend', endPos);
    // gCanvas.addEventListener('touchmove', draw);
}

function onMoveText() {
    console.log(g);
}
function onAddText() {
    console.log(g);
}
function onDeleteText() {
    console.log(g);
}
function onFontBigger() {
    console.log(g);
}
function onFontSmaller() {
    console.log(g);
}
function onFontDirection(dir) {
    console.log(g);
}
function onSetFont() {
    console.log(g);
}
function onFontUnderLine() {
    console.log(g);
}
function onFontColor() {
    console.log(g);
}
function onMoveStickers(diff) {
    console.log(g);
}
function onShare() {
    console.log(g);
}
function onDownload() {
    console.log(g);
}