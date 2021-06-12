'use strict'
var gCanvas;
var gCtx;
var gCanvasW = 540;
var gCanvasH = loadFromStorage('canvasH');
var gLine;
var gStartPos;
var gCurrImage = setImageId();
var gFontStrokeColor = '#000'; //black
var gFontAlign = 'center'
var gFontFamily = 'impact';
var gFontColor = '#fff'; //white
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
    { id: 1, url: 'img/1.jpg', keywords: ['trump', 'politics'] },
    { id: 2, url: 'img/2.jpg', keywords: ['pets', 'dog', 'puppy'] },
    { id: 3, url: 'img/3.jpg', keywords: ['pets', 'dog', 'puppy', 'baby'] },
    { id: 4, url: 'img/4.jpg', keywords: ['pets', 'cat', 'kity'] },
    { id: 5, url: 'img/5.jpg', keywords: ['kid'] },
    { id: 6, url: 'img/6.jpg', keywords: ['aliens'] },
    { id: 7, url: 'img/7.jpg', keywords: ['baby'] },
    { id: 8, url: 'img/8.jpg', keywords: ['movie'] },
    { id: 9, url: 'img/9.jpg', keywords: ['baby'] },
    { id: 10, url: 'img/10.jpg', keywords: ['obama', 'politics'] },
    { id: 11, url: 'img/11.jpg', keywords: ['wresling'] },
    { id: 12, url: 'img/12.jpg', keywords: ['haim'] },
    { id: 13, url: 'img/13.jpg', keywords: ['movie', 'leonardo'] },
    { id: 14, url: 'img/14.jpg', keywords: ['movie', 'neo'] },
    { id: 15, url: 'img/15.jpg', keywords: ['movie', 'lord of the rings'] },
    { id: 16, url: 'img/16.jpg', keywords: ['movie', 'star trek'] },
    { id: 17, url: 'img/17.jpg', keywords: ['putin', 'politics'] },
    { id: 18, url: 'img/18.jpg', keywords: ['movie', 'toy story'] },
    { id: 19, url: 'img/19.jpg', keywords: ['spongebob'] },
    { id: 20, url: 'img/20.jpg', keywords: [''] },
    { id: 21, url: 'img/21.jpg', keywords: [''] },
    { id: 22, url: 'img/22.jpg', keywords: [''] },
    { id: 23, url: 'img/23.jpg', keywords: [''] },
    { id: 24, url: 'img/24.jpg', keywords: [''] },
    { id: 25, url: 'img/25.jpg', keywords: [''] },
    { id: 26, url: 'img/26.jpg', keywords: [''] },
    { id: 27, url: 'img/27.jpg', keywords: [''] },
    { id: 28, url: 'img/28.jpg', keywords: [''] },
    { id: 29, url: 'img/29.jpg', keywords: [''] },
    { id: 30, url: 'img/30.jpg', keywords: [''] },
    { id: 31, url: 'img/31.jpg', keywords: [''] },
    { id: 32, url: 'img/32.jpg', keywords: [''] },
    { id: 33, url: 'img/33.jpg', keywords: [''] },
    { id: 34, url: 'img/34.jpg', keywords: [''] },
    { id: 35, url: 'img/35.jpg', keywords: [''] },
    { id: 36, url: 'img/36.jpg', keywords: [''] },
    { id: 37, url: 'img/37.jpg', keywords: [''] },
    { id: 38, url: 'img/38.jpg', keywords: [''] },
    { id: 39, url: 'img/39.jpg', keywords: [''] },
    { id: 40, url: 'img/40.jpg', keywords: [''] },
    { id: 41, url: 'img/41.jpg', keywords: [''] },
    { id: 42, url: 'img/42.jpg', keywords: [''] },
    { id: 43, url: 'img/43.jpg', keywords: [''] },
    { id: 44, url: 'img/44.jpg', keywords: [''] },
    { id: 45, url: 'img/45.jpg', keywords: [''] },
    { id: 46, url: 'img/46.jpg', keywords: [''] },
    { id: 47, url: 'img/47.jpg', keywords: [''] },
    { id: 48, url: 'img/48.jpg', keywords: [''] },
    { id: 49, url: 'img/49.jpg', keywords: [''] },
    { id: 50, url: 'img/50.jpg', keywords: [''] },
    { id: 51, url: 'img/51.jpg', keywords: [''] },
    { id: 52, url: 'img/52.jpg', keywords: [''] },
    { id: 53, url: 'img/53.jpg', keywords: [''] },
    { id: 54, url: 'img/54.jpg', keywords: [''] },
    { id: 55, url: 'img/55.jpg', keywords: [''] },
    { id: 56, url: 'img/56.jpg', keywords: [''] },
    { id: 57, url: 'img/57.jpg', keywords: [''] },
    { id: 58, url: 'img/58.jpg', keywords: [''] },
    { id: 59, url: 'img/59.jpg', keywords: [''] },
    { id: 60, url: 'img/60.jpg', keywords: [''] }
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
        isDrag: false,
        pos: {
            x: (gCanvasW / 2) - 60,
            y: 60
        }
    },
    {
        txt: 'second line',
        size: 40,
        color: gFontColor,
        align: gFontAlign,
        pos: {
            x: (gCanvasW / 2) - 60,
            y: gCanvasH / 2 + 20
        }
    },
    {
        txt: 'third line',
        size: 40,
        color: gFontColor,
        align: gFontAlign,
        pos: {
            x: (gCanvasW / 2) - 60,
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
    // addListeners()
}

function addListeners() {
    addMouseListeners()
    // addTouchListeners()
}

function addMouseListeners() {
    //     gCanvas.addEventListener('mousemove', onMove);
    //     gCanvas.addEventListener('mousedown', onDown);
    //     gCanvas.addEventListener('mouseup', onUp);
}

function addTouchListeners() {
    gCanvas.addEventListener('touchmove', onMove);
    gCanvas.addEventListener('touchstart', onDown);
    gCanvas.addEventListener('touuchend', onUp);
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
    img.src = `../${meme}`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawLines()
    }
}

function getText(text) {
    let idx = gMeme.selectedLineIdx
    drawImg()
    gMeme.lines[idx].txt = text
    drawLines()
}

function drawLines() {
    gMeme.lines.forEach((line, idx) => {
        gCtx.strokeStyle = '#000'
        onDrawText(line.txt, line.pos, idx)
        var textW = gCtx.measureText(line.txt).width + 20
        line.width = textW
        var textH = line.size * 1.5
        if (gFontAlign === 'center') {
            var rectX = gCanvasW / 2 - textW / 2
        } else if (gFontAlign === 'left') {
            var rectX = gCanvasW / 2 - 10
        }
        var rectY = line.pos.y - line.size * 1.1
        if (idx === gMeme.selectedLineIdx && line.txt) {
            gCtx.lineWidth = 1
            gCtx.strokeStyle = '#001'
            gCtx.strokeRect(rectX, rectY, textW, textH)
        }
    })
}

function onDrawText(text, pos, idx) {
    gCtx.lineWidth = 5;
    gCtx.textAlign = gFontAlign
    gCtx.font = `${gMeme.lines[idx].size + 'px'} ${gFontFamily}`
    pos.x = gCanvasW / 2
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
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function onDeleteText() {
    var answer = confirm('Are you sure you want to delete?')
    if (answer) {
        let idx = gMeme.selectedLineIdx;
        gMeme.lines.splice(idx, 1)
        drawImg()
    }
}

function onFontSize(diff) {
    let idx = gMeme.selectedLineIdx
    gMeme.lines[idx].size += diff
    drawImg()
    drawLines()
}

function onFontDirection(dir) {
    gFontAlign = dir
    drawImg()
    drawLines()
}

function setFont(font) {
    gFontFamily = font
}

function onFontColor(color) {
    gFontColor = color
}

function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function onChangeLine() {
    if (gMeme.selectedLineIdx <= gMeme.lines.length - 1) {
        gMeme.selectedLineIdx++
        drawImg()
        drawLines()
    }
    if (gMeme.selectedLineIdx === gMeme.lines.length) {
        gMeme.selectedLineIdx = 0
        drawImg()
        drawLines()
    }
    var input = document.querySelector('.editor-controls input');
    input.value = gMeme.lines[gMeme.selectedLineIdx].txt
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

function onShare() {
}

function onDownloadCanvas(elLink) {
    const data = gCanvas.toDataURL();
    console.log('DATA', data);
    elLink.href = data;
    elLink.download = `Your-Meme`;
}

// function onFontUnderLine() {
//     console.log(g);
// }
// function onMoveStickers(diff) {
//     console.log(g);
// }
// function moveTextManual(line, x, y) {
//     var line = line
//     console.log(line);
//     line.pos.x = x
//     line.pos.y = y
//     drawImg()
//     drawLines()
// }
// function getLine() {
//     return gLine = gMeme.lines[gMeme.selectedLineIdx]
// }

// function isLineClicked(clickedPos) {
//     // var pos = getCursorPos(event)
//     const { pos } = gLine.pos
//     gMeme.lines.forEach((line) => {

//         if (pos.x > gCanvasW / 2 - line.width / 2 + 25 &&
//             pos.x < gCanvasW / 2 + line.width / 2 - 25 &&
//             pos.y > line.pos.y - line.size &&
//             pos.y < line.pos.y + line.size / 2) {
//             return true
//             //     gCanvas.style.cursor = 'grab'
//             //     moveTextManual(line, pos.x, pos.y)
//         }
//         return false
//     })

// }
// console.log(isLineClicked());

// function getCursorPos(x, y) {

//     // return { x, y }
// }

// function onDown() {
//     const pos = getEvPos(ev)
//     if (!isLineClicked(pos)) return
//     setLineDrag(true)
//     gStartPos = pos
//     document.body.style.cursor = 'grabbing'
// }

// function onMove() {

// }
// function onUp() {

// }