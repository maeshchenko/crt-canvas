import {drawCRTPixel} from './helpers'

const canvas_source = document.getElementById("source") as HTMLCanvasElement;
const ctx_source = canvas_source.getContext('2d');

const canvas_result = document.getElementById('result-crt') as HTMLCanvasElement;
const ctx_result = canvas_result.getContext('2d');

ctx_source.fillStyle = '#4f534d';
ctx_source.fillRect(0,0,canvas_result.width, canvas_result.height);
ctx_source.fill();

const img1 = new Image();
img1.src = 'public/tv.png';

img1.onload = function(){
    ctx_result.drawImage(img1, 0, 0, canvas_result.width, canvas_result.height);
}

const video = document.getElementById("source-video") as HTMLVideoElement;
const video_btn = document.getElementById('btn') as HTMLButtonElement;

video_btn.onclick = () => {
    if(!video.paused){
        video.pause();
    } else {
       video.play();
    }
}

const x_video_offset = 220;
const y_video_offset = 284;

video.addEventListener("play", () => {
    function step() {
        ctx_result.fillStyle = '#2a2a2a';
        ctx_result.fillRect(110,280,592, 384);
        ctx_result.fill();

        ctx_source.drawImage(video, 0, 0, 60, 60);

        for(let h = 0; h<canvas_source.height; h++){
            for(let w = 0; w<canvas_source.width; w++){
                let arr = ctx_source.getImageData(w,h,1,1).data;
                drawCRTPixel(ctx_result,arr,h,w,y_video_offset,x_video_offset)
            }
        }

        requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
});
