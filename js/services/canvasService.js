'use strict'
const g = 'YASSSS' // yasss
var gCanvas;
var gCtx;
const gFontStrokeColor = '#000'; //black
var gFontSize = 40;
var gFontAlign = 'center'
var gFontFamily = 'impact';
var gUnderLine = 'none';
var gFontColor = '#fff'; //white
const gTouchEvs = ['touchstart', 'touchmove', 'touchend'];

function renderCanvas() {
    gCanvas = document.querySelector('canvas');
    gCtx = gCanvas.getContext('2d')
}


function getText(str) {
    console.log(str);
    onAddText(str)
}

function onAddText(text) {
    gCtx.lineWidth = 2;
    gCtx.font = `${gFontSize + 'px'} ${gFontFamily}`
    gCtx.strokeText(text, 10, 50);
    gCtx.fillStyle = gFontColor

    gCtx.strokeWidth = 20;
    // gCtx.strokeStyle = gFontStrokeColor
    // gCtx.lineCap = 'round'
    // gCtx.fill()
    // gCtx.fillStyle = 'white'
    // gCtx.beginPath()
    // gCtx.rect(25, 15, 450, 50)
    // gCtx.stroke()
}

function onMoveText() {
    console.log(g);
}

function onDeleteText() {
    var answer = confirm('Are you sure you want to delete?')
    if (answer) return clearCanvas()
}

function onFontBigger() {
    console.log(gFontSize);
    if (gFontSize === 100) return
    return gFontSize += 5
}

function onFontSmaller() {
    console.log(gFontSize);
    if (gFontSize === 5) return
    return gFontSize -= 5
}

function onFontDirection(dir) {
    console.log(g);
}

function setFont(font) {
    gFontFamily = font
}

function onFontUnderLine() {
    console.log(g);
}

function onFontColor(color) {
    gFontColor = color
}

function onMoveStickers(diff) {
    console.log(g);
}

function onShare() {
    console.log(g);
}

function onDownloadCanvas(elLink) {
    const data = gCanvas.toDataURL();
    console.log('DATA', data);
    elLink.href = data;
    elLink.download = `Your-Meme-`;
}
