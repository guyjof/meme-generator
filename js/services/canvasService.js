'use strict'
const g = 'YASSSS' // yasss
var gCanvas;
var gCtx;
var gCanvasW = 540;
var gCanvasH = loadFromStorage('canvasH');
var gCurrImage = setImageId();
const gFontStrokeColor = '#000'; //black
var gFontAlign = 'center'
var gFontFamily = 'impact';
var gUnderLine = 'none';
var gFontColor = '#fff'; //white
var elCanvas = document.querySelector('canvas');
const gTouchEvs = ['touchstart', 'touchmove', 'touchend'];
var gKeywords = {
    trump: 1,
    politics: 3,
    pets: 3,
    dog: 2,
    puppy: 2,
    baby: 2,
    cat: 1,
    kity: 1,
    kid: 1,
    aliens: 1,
    movie: 6,
    obama: 1,
    wresling: 1,
    haim: 1,
    leonardo: 1,
    neo: 1,
    'lord of the rings': 1,
    'star trek': 1,
    putin: 1,
    'toy story': 1,
    spongebob: 1
}
var gMemes = [
    { id: 1, url: '../img/1.jpg', keywords: ['trump', 'politics'] },
    { id: 2, url: '../img/2.jpg', keywords: ['pets', 'dog', 'puppy'] },
    { id: 3, url: '../img/3.jpg', keywords: ['pets', 'dog', 'puppy', 'baby'] },
    { id: 4, url: '../img/4.jpg', keywords: ['pets', 'cat', 'kity'] },
    { id: 5, url: '../img/5.jpg', keywords: ['kid'] },
    { id: 6, url: '../img/6.jpg', keywords: ['aliens'] },
    { id: 7, url: '../img/7.jpg', keywords: ['baby'] },
    { id: 8, url: '../img/8.jpg', keywords: ['movie'] },
    { id: 9, url: '../img/9.jpg', keywords: ['baby'] },
    { id: 10, url: '../img/10.jpg', keywords: ['obama', 'politics'] },
    { id: 11, url: '../img/11.jpg', keywords: ['wresling'] },
    { id: 12, url: '../img/12.jpg', keywords: ['haim'] },
    { id: 13, url: '../img/13.jpg', keywords: ['movie', 'leonardo'] },
    { id: 14, url: '../img/14.jpg', keywords: ['movie', 'neo'] },
    { id: 15, url: '../img/15.jpg', keywords: ['movie', 'lord of the rings'] },
    { id: 16, url: '../img/16.jpg', keywords: ['movie', 'star trek'] },
    { id: 17, url: '../img/17.jpg', keywords: ['putin', 'politics'] },
    { id: 18, url: '../img/18.jpg', keywords: ['movie', 'toy story'] },
    { id: 19, url: '../img/19.jpg', keywords: ['spongebob'] },
    { id: 20, url: '../img/20.jpg', keywords: [''] },
    { id: 21, url: '../img/21.jpg', keywords: [''] },
    { id: 22, url: '../img/22.jpg', keywords: [''] },
    { id: 23, url: '../img/23.jpg', keywords: [''] },
    { id: 24, url: '../img/24.jpg', keywords: [''] },
    { id: 25, url: '../img/25.jpg', keywords: [''] },
    { id: 26, url: '../img/26.jpg', keywords: [''] },
    { id: 27, url: '../img/27.jpg', keywords: [''] },
    { id: 28, url: '../img/28.jpg', keywords: [''] },
    { id: 29, url: '../img/29.jpg', keywords: [''] },
    { id: 30, url: '../img/30.jpg', keywords: [''] },
    { id: 31, url: '../img/31.jpg', keywords: [''] },
    { id: 32, url: '../img/32.jpg', keywords: [''] },
    { id: 33, url: '../img/33.jpg', keywords: [''] },
    { id: 34, url: '../img/34.jpg', keywords: [''] },
    { id: 35, url: '../img/35.jpg', keywords: [''] },
    { id: 36, url: '../img/36.jpg', keywords: [''] },
    { id: 37, url: '../img/37.jpg', keywords: [''] },
    { id: 38, url: '../img/38.jpg', keywords: [''] },
    { id: 39, url: '../img/39.jpg', keywords: [''] },
    { id: 40, url: '../img/40.jpg', keywords: [''] },
    { id: 41, url: '../img/41.jpg', keywords: [''] },
    { id: 42, url: '../img/42.jpg', keywords: [''] },
    { id: 43, url: '../img/43.jpg', keywords: [''] },
    { id: 44, url: '../img/44.jpg', keywords: [''] },
    { id: 45, url: '../img/45.jpg', keywords: [''] },
    { id: 46, url: '../img/46.jpg', keywords: [''] },
    { id: 47, url: '../img/47.jpg', keywords: [''] },
    { id: 48, url: '../img/48.jpg', keywords: [''] },
    { id: 49, url: '../img/49.jpg', keywords: [''] },
    { id: 50, url: '../img/50.jpg', keywords: [''] },
    { id: 51, url: '../img/51.jpg', keywords: [''] },
    { id: 52, url: '../img/52.jpg', keywords: [''] },
    { id: 53, url: '../img/53.jpg', keywords: [''] },
    { id: 54, url: '../img/54.jpg', keywords: [''] },
    { id: 55, url: '../img/55.jpg', keywords: [''] },
    { id: 56, url: '../img/56.jpg', keywords: [''] },
    { id: 57, url: '../img/57.jpg', keywords: [''] },
    { id: 58, url: '../img/58.jpg', keywords: [''] },
    { id: 59, url: '../img/59.jpg', keywords: [''] },
    { id: 60, url: '../img/60.jpg', keywords: [''] }
]
var gCurrMeme = gMemes[gCurrImage - 1]

var gMeme = {
    selectedImgId: gCurrMeme,
    selectedLineIdx: 0,
    lines: [{
        txt: 'first line',
        size: 40,
        color: gFontColor,
        align: gFontAlign,
        center: { x: 0, y: 0 },
        pos: {
            x: (elCanvas.width / 2) - 60,
            y: 60
        }
    },
    {
        txt: 'second line',
        size: 40,
        color: gFontColor,
        align: gFontAlign,
        pos: {
            x: (elCanvas.width / 2) - 60,
            y: gCanvasH / 2 + 20
        }
    },
    {
        txt: 'third line',
        size: 40,
        color: gFontColor,
        align: gFontAlign,
        pos: {
            x: (elCanvas.width / 2) - 60,
            y: gCanvasH - 20
        }
    }
    ]
}

function initEditor() {
    gCanvas = document.querySelector('canvas');
    gCtx = gCanvas.getContext('2d')
    resizeCanvas()
    drawImg()
}

function setImageId() {
    gCurrImage = loadFromStorage('img')
    gCurrImage = gCurrImage
    return gCurrImage
}

function resizeCanvas() {
    gCanvas.height = loadFromStorage('canvasH')
}

function drawImg() {
    var img = new Image()
    var meme = gCurrMeme.url;
    img.src = `${meme}`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawLines()
    }
}


function drawLines() {
    gMeme.lines.forEach((text, idx) => {
        var currLine = gMeme.lines[idx];
        var textX = currLine.pos.x - 20
        var textY = currLine.pos.y - 50
        var rectX = currLine.txt.length * currLine.size / 1.5
        var rectY = 70
        gCtx.strokeStyle = '#000'
        onAddText(currLine.txt, currLine.pos, idx)
        gCtx.lineWidth = 1
        gCtx.strokeStyle = '#001'
        gCtx.strokeRect(textX, textY, rectX, rectY)
    })
}


function getText(text) {
    let idx = gMeme.selectedLineIdx
    drawImg()
    gMeme.lines[idx].txt = text
    drawLines()
}

function onAddText(text, pos, idx) {
    gCtx.lineWidth = 5;
    gCtx.font = `${gMeme.lines[idx].size + 'px'} ${gFontFamily}`
    gCtx.strokeText(text, pos.x, pos.y);
    gCtx.fillStyle = gFontColor;
    gCtx.fillText(text, pos.x, pos.y);
}

function onAddNewText() {
    var text = 'new line'
    gCtx.lineWidth = 5;
    gCtx.font = 50, gFontFamily
    gCtx.strokeText(text, gCanvasW / 2 - 60, gCanvasH / 2);
    gCtx.fillStyle = gFontColor;
    gCtx.fillText(text, gCanvasW / 2 - 60, gCanvasH / 2);
    gMeme.lines.push({
        txt: text,
        size: 40,
        color: gFontColor,
        align: gFontAlign,
        center: { x: 0, y: 0 },
        pos: {
            x: (gCanvasW / 2 - 60),
            y: gCanvasH / 2
        }
    })
}

function onDeleteText() {
    var answer = confirm('Are you sure you want to delete?')
    if (answer) clearCanvas();
    drawImg()
    gMeme.lines[2].txt = ''
}

function onFontBigger() {
    let idx = gMeme.selectedLineIdx
    gMeme.lines[idx].size += 5
    drawImg()
    drawLines()
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


function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function onShareCanvas() {
    console.log(g);
}

function onDownloadCanvas(elLink) {
    const data = gCanvas.toDataURL();
    console.log('DATA', data);
    elLink.href = data;
    elLink.download = `Your-Meme-`;
}


function onChangeLine() {
    console.log(gMeme.selectedLineIdx + 1);
    if (gMeme.selectedLineIdx < gMeme.lines.length - 1) return gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) return gMeme.selectedLineIdx = 0
}

function onMoveLine(dir) {
    if (dir === 'up') {
        if (!gMeme.lines[gMeme.selectedLineIdx].pos.y) return
        gMeme.lines[gMeme.selectedLineIdx].pos.y -= 5
        drawImg()
        drawLines()
    }
    if (dir === 'down') {
        if (!gMeme.lines[gMeme.selectedLineIdx].pos.y) return
        gMeme.lines[gMeme.selectedLineIdx].pos.y += 5
        drawImg()
        drawLines()
    }
}

function getCanvas() {
    var canvas = gCanvas
    return canvas
}


function getCursorPos(event, meme) {
    meme.style.cursor = 'move'
    // console.log(event.offsetX)
    // console.log(event.offsetY)
}

function moveTextManual() {
    gMeme.lines.forEach((text, idx) => {
        var currLine = gMeme.lines[idx];
        var textX = currLine.pos.x - 20
        var textY = currLine.pos.y - 50
        var rectX = currLine.txt.length * currLine.size / 1.5
        var rectY = 70
    })
}