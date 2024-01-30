export function drawCRTPixel (ctx:CanvasRenderingContext2D,colorsArr: Uint8ClampedArray, xCoord: number, yCoord: number, pixelWidth:number, pixelHeight:number){
    const colorWidth = pixelWidth / 100 * 32;
    const spaceWidth = pixelWidth / 100 * 3;
    let curX = xCoord;
    let curY = yCoord;

    // а что если делать не тусклость, а прозрачность?
    // 255 - это 100%, 0 - это 0%
    // 25 - это 10%
    // 25.5/255*100 = 10
    // Прозрачность будет нужна 0.1 -> значит на 100 умножать не надо

    ctx.beginPath();
    ctx.roundRect(curX, curY, colorWidth,pixelHeight, 5 )
    ctx.fillStyle = `rgba(255,0,0,${colorsArr[0]/255})`;
    curX = curX + colorWidth + spaceWidth;
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = `rgba(0,255,0,${colorsArr[1]/255})`;
    ctx.roundRect(curX, curY, colorWidth,pixelHeight, 5 )
    curX = curX + colorWidth + spaceWidth;
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = `rgba(0,0,255,${colorsArr[2]/255})`;
    ctx.roundRect(curX, curY, colorWidth,pixelHeight, 5 )
    ctx.fill();
}

export function drawPixels(ctx:CanvasRenderingContext2D,startX:number, startY:number, width:number, height:number, pixelsQuantity:number, colorsArr:Uint8ClampedArray){
    const clusterWidth = width / pixelsQuantity;
    const clusterHeight = height / pixelsQuantity;

    const pixelWidth = clusterWidth / 100 * 98;
    const spaceWidth = clusterWidth / 100 * 2;

    const pixelHeight = clusterHeight / 100 * 98;
    const spaceHeight = clusterHeight / 100 * 2;

    let curX = startX;
    let curY = startY;

    for(let i = 0; i<pixelsQuantity; i++){
        for(let j = 0; j<pixelsQuantity; j++){
            if(j % 2 === 0 ){
                curY = curY + clusterHeight / 2;
            } else {
                curY = curY - clusterHeight / 2;
            }
            drawCRTPixel(ctx,colorsArr, curX, curY, pixelWidth, pixelHeight);
            curX = (curX + pixelWidth + spaceWidth) ;
        }
        curX = startX;
        curY = (curY + pixelHeight + spaceHeight);
    }
};
