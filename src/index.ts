import {drawPixels, drawCRTPixel} from './helpers'

const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext('2d');

const pixelColors = ['#47bffe','#f0cfcf','#88ff1f','#93d4a5'];

ctx.fillStyle = '#4f534d';
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

ctx.beginPath();
ctx.roundRect(0, 330, 100,100, 0 )
ctx.fillStyle = pixelColors[3];
ctx.fill();
ctx.closePath();

const img1 = new Image();
img1.src = 'download.png';
img1.onload = function (){
    // ctx.drawImage(img1, 0,0, 100,100)

let pixelColorArr1 = ctx.getImageData(10,10,1,1).data;
let pixelColorArr2 = ctx.getImageData(10,110,1,1).data;
let pixelColorArr3 = ctx.getImageData(10,220,1,1).data;
let pixelColorArr4= ctx.getImageData(10,330,1,1).data;

const pixelQnty = 20;

drawPixels(ctx,200,0, 100, 100, pixelQnty, pixelColorArr1);
drawPixels(ctx,200,110, 100, 100, pixelQnty, pixelColorArr2);
drawPixels(ctx,200,220, 100, 100, pixelQnty, pixelColorArr3);
drawPixels(ctx,200,330, 100, 100, pixelQnty, pixelColorArr4);

// drawPixels(ctx,200,31, 60, 60, pixelQnty, pixelColorArr1);
// drawPixels(ctx,231,31, 60, 60, pixelQnty, pixelColorArr2);
// drawPixels(ctx,262,31, 60, 60, pixelQnty, pixelColorArr3);
// drawPixels(ctx,293,31, 60, 60, pixelQnty, pixelColorArr4);
//
// drawPixels(ctx,200,62, 60, 60, pixelQnty, pixelColorArr1);
// drawPixels(ctx,231,62, 60, 60, pixelQnty, pixelColorArr2);
// drawPixels(ctx,262,62, 60, 60, pixelQnty, pixelColorArr3);
// drawPixels(ctx,293,62, 60, 60, pixelQnty, pixelColorArr4);
//
// drawPixels(ctx,200,93, 60, 60, pixelQnty, pixelColorArr1);
// drawPixels(ctx,231,93, 60, 60, pixelQnty, pixelColorArr2);
// drawPixels(ctx,262,93, 60, 60, pixelQnty, pixelColorArr3);
// drawPixels(ctx,293,93, 60, 60, pixelQnty, pixelColorArr4);

}
// теперь надо получить цвета с канваса.
// делим изображение на квадраты и в каждом считаем средний цвет
// добавляем его в массив
// по этому массиву запускаем drawPixels

let squareSize = 10;
let imageSize = 100;
let squaresNum = imageSize / squareSize;
let resultColors = [];

for(let i = 0; i < squaresNum; i++){ // перебираем квадраты
    let sumColor = [0,0,0];
    for(let j = i * squareSize; j < squareSize; j++){ // пиксели по высоте
        for(let k = i * squareSize; k < squareSize; k++){ // пиксели по ширине
            let pixelColorArr = ctx.getImageData(j,k,1,1).data;

            console.log('j,k: ', j,k);
            console.log('squareSize: ', squareSize);
            console.log('pixelColorArr: ', pixelColorArr);

            sumColor[0] = sumColor[0] + pixelColorArr[0];
            sumColor[1] = sumColor[1] + pixelColorArr[1];
            sumColor[2] = sumColor[2] + pixelColorArr[2];
        }
    }
    resultColors.push([
        (sumColor[0])/(squareSize*squareSize),
        (sumColor[1])/(squareSize*squareSize),
        (sumColor[2])/(squareSize*squareSize),
    ])
};

console.log('result colors: ',resultColors)

