export function drawCRTPixel (ctx:CanvasRenderingContext2D,colorsArr: Uint8ClampedArray, xCoord: number, yCoord: number, pixelWidth:number, pixelHeight:number){
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

export function drawPixels(ctx:CanvasRenderingContext2D,startX:number, startY:number, width:number, height:number, pixelsQuantity:number, colorsArr:Uint8ClampedArray){
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
            drawCRTPixel(ctx,colorsArr, curX, curY, pixelWidth, pixelHeight);
            curX = (curX + pixelWidth + spaceWidth) ;
        }
        curX = startX;
        curY = (curY + pixelHeight + spaceHeight);
    }
};
