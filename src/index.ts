import {drawPixels, drawCRTPixel} from './helpers'

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

const img1 = new Image();
img1.src = 'download.png';
img1.onload = function (){
    ctx.drawImage(img1, 0,0, 100,100)
}

let pixelColorArr1 = ctx.getImageData(10,10,1,1).data;
let pixelColorArr2 = ctx.getImageData(0,120,1,1).data;
let pixelColorArr3 = ctx.getImageData(0,220,1,1).data;



const pixelQnty = 4;

drawPixels(ctx,200,0, 30, 30, pixelQnty, pixelColorArr1);
drawPixels(ctx,231,0, 30, 30, pixelQnty, pixelColorArr2);
drawPixels(ctx,262,0, 30, 30, pixelQnty, pixelColorArr3);

drawPixels(ctx,200,31, 30, 30, pixelQnty, pixelColorArr1);
drawPixels(ctx,231,31, 30, 30, pixelQnty, pixelColorArr2);
drawPixels(ctx,262,31, 30, 30, pixelQnty, pixelColorArr3);

drawPixels(ctx,200,62, 30, 30, pixelQnty, pixelColorArr1);
drawPixels(ctx,231,62, 30, 30, pixelQnty, pixelColorArr2);
drawPixels(ctx,262,62, 30, 30, pixelQnty, pixelColorArr3);

// теперь надо получить цвета с канваса.
// делим изображение на квадраты и в каждом считаем средний цвет
// добавляем его в массив
// по этому массиву запускаем drawPixels
