let canvas = document.getElementById('canvas');
canvas.setAttribute('width', '372');
canvas.setAttribute('height', '372');
let ctx = canvas.getContext("2d");

let imgFrame = new Image();

fps = 5;

let x = 0;
let w = 252;
let h = 252;
let dx = 40;
let dy = 40 ;
let scene = 0;

let diamond = setInterval(function () {
  
  if(scene==0){
    scene_0();
  }
  if(scene==1){
    scene_1();
  }
  if(scene==2){
    scene_2();
  }
}, 1000 / fps );

function scene_0(){
  imgFrame.src = './img/bri_big_anim_start.png';
  ctx.clearRect(0, 0, 372, 372);
  ctx.drawImage(imgFrame, x, 0, 392, 372, dx, dy, w, h);
  if(x<1568-392){
    x +=392;
    w +=30;
    h +=30;
    dx -=10;
    dy -=10;
  }
  
  else{
    scene=1;
    x=0;
    dx = 40;
    dy = 40;
    w = 252;
    h = 252;
  }
}
function scene_1(){
  imgFrame.src = './img/bri_big_anim_middle.png';
  if(x!=0){
    ctx.clearRect(0, 0, 372, 372);
  }
  ctx.drawImage(imgFrame, x, 0, 449, 432, dx, dy, w, h);
  if(x<1796-449){
    x +=449;
  }
  else{
    x=0;
    scene=2;
  }
}
function scene_2(){
  imgFrame.src = './img/bri_big_anim_finish.png';
  if(x!=0){
    ctx.clearRect(0, 0, 372, 372);
  }
  ctx.drawImage(imgFrame, x, 0, 326, 337, dx, dy, w, h);
  if(x<1304-326){
    x +=326;
    w -=80;
    h -=80;
    dx -=20;
    dy -=20;
  }
  else{
    x=0;
    dx = 40;
    dy = 40;
    w = 252;
    h = 252;
    scene=0;
  }
}


