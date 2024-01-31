export function drawCRTPixel (ctx:CanvasRenderingContext2D,colorsArr: number[] | Uint8ClampedArray, yCoord: number, xCoord: number, offsetY:number, offsetX: number){
    const colorWidth = 1.8;
    const spaceWidth = 0.2;
    const spaceHeight = 0.2;
    const pixelHeight = (colorWidth*3 + spaceWidth*2 + spaceHeight);
    const pixelWidth = (colorWidth*3 + spaceWidth*3);

    ctx.beginPath();
    ctx.roundRect(xCoord*pixelWidth + offsetX, yCoord*pixelHeight + spaceHeight*yCoord + offsetY, colorWidth,pixelHeight, 5 )
    ctx.fillStyle = `rgba(255,0,0,${colorsArr[0]/255})`;
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = `rgba(0,255,0,${colorsArr[1]/255})`;
    ctx.roundRect(xCoord*pixelWidth + spaceWidth + colorWidth + offsetX, yCoord*pixelHeight + spaceHeight*yCoord + offsetY, colorWidth,pixelHeight, 5 )
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = `rgba(0,0,255,${colorsArr[2]/255})`;
    ctx.roundRect(xCoord*pixelWidth + spaceWidth*2 + colorWidth*2 + offsetX, yCoord*pixelHeight + spaceHeight*yCoord + offsetY, colorWidth,pixelHeight, 5 )
    ctx.fill();
}
