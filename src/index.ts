const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext('2d');

const pixelColors = ['#0e367c','#fba257','#ab3434'];

ctx.fillStyle = '#9aa296';
ctx.fillRect(0,0,canvas.width, canvas.height);
ctx.fill();

ctx.beginPath();
ctx.roundRect(0, 0, 100,100, 0 )
ctx.fillStyle = pixelColors[0];
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.roundRect(0, 110, 100,100, 0 )
ctx.fillStyle = pixelColors[1];
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.roundRect(0, 220, 100,100, 0 )
ctx.fillStyle = pixelColors[2];
ctx.fill();
ctx.closePath();

let pixelColorArr1 = ctx.getImageData(0,0,1,1).data;
let pixelColorArr2 = ctx.getImageData(0,120,1,1).data;
let pixelColorArr3 = ctx.getImageData(0,220,1,1).data;

function drawCRTPixel (colorsArr: Uint8ClampedArray, xCoord: number, yCoord: number, pixelWidth:number, pixelHeight:number){
    const colorWidth = pixelWidth / 100 * 30;
    const spaceWidth = pixelWidth / 100 * 5;
    let curX = xCoord;
    let curY = yCoord;

    ctx.beginPath();
    ctx.roundRect(curX, curY, colorWidth,pixelHeight, 5 )
    ctx.fillStyle = `rgba(${String(colorsArr[0])},0,0,1)`;
    curX = curX + colorWidth + spaceWidth;
    ctx.fill();


    ctx.beginPath();
    ctx.fillStyle = `rgba(0,${String(colorsArr[1])},0,1)`;
    ctx.roundRect(curX, curY, colorWidth,pixelHeight, 5 )
    curX = curX + colorWidth + spaceWidth;
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = `rgba(0,0,${String(colorsArr[1])},1)`;
    ctx.roundRect(curX, curY, colorWidth,pixelHeight, 5 )
    ctx.fill();

    console.log('width, height: ', colorWidth*3 + spaceWidth * 2, pixelHeight);
}
function drawPixels(startX:number, startY:number, width:number, height:number, pixelsQuantity:number, colorsArr:Uint8ClampedArray){
    const clusterWidth = width / pixelsQuantity;
    const clusterHeight = height / pixelsQuantity;

    const pixelWidth = clusterWidth / 100 * 95;
    const spaceWidth = clusterWidth / 100 * 5;

    const pixelHeight = clusterHeight / 100 * 95;
    const spaceHeight = clusterHeight / 100 * 5;

    let curX = startX;
    let curY = startY;

    for(let i = 0; i<pixelsQuantity; i++){
        for(let j = 0; j<pixelsQuantity; j++){
            if(j % 2 === 0 ){
                curY = curY + clusterHeight / 2;
            } else {
                curY = curY - clusterHeight / 2;
            }
            drawCRTPixel(colorsArr, curX, curY, pixelWidth, pixelHeight);
            curX = (curX + pixelWidth + spaceWidth) ;
        }
        curX = startX;
        curY = (curY + pixelHeight + spaceHeight);
    }
};

const pixelQnty = 16;

drawPixels(200,0, 100, 100, pixelQnty, pixelColorArr1);
drawPixels(200,110, 100, 100, pixelQnty, pixelColorArr2);
drawPixels(200,220, 100, 100, pixelQnty, pixelColorArr3);
