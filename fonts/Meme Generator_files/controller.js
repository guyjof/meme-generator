'use strict'
const g = 'YASSSS' // yasss
var gCanvas;
var gCtx;
const gFontStrokeColor = '#000'; //black
var gFontSize = 50;
var gFontAlign = 'center'
var gFontFamily = 'impact';
var gUnderLine = 'none';
var gFontColor = '#fff'; //white


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
onAddText(text)
function onAddText(text) {
    gCtx.lineWidth = 5;
    gCtx.lineCap = 'round';
    gCtx.strokeStyle = gFontStrokeColor;
    gCtx.font = `${gFontSize}px ${gFontFamily}'`
    gCtx.fillText(text, 20, 20)
    gCtx.strokeText(text, 2, 20)
    gCtx.fillStyle = 'white'
    gCtx.fill()
    // gCtx.lineWidth = 5;
    // gCtx.strokeStyle = gFontStrokeColor
    // gCtx.lineCap = 'round'
    // gCtx.fill()
    // gCtx.fillStyle = 'white'
    // gCtx.beginPath()
    // gCtx.rect(25, 15, 450, 50)
    // gCtx.stroke()
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
