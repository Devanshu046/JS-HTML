let i1=document.getElementById('i1');
let i2=document.getElementById('i2');
let i3=document.getElementById('i3');
let i4=document.getElementById('i4');
let b1=document.getElementById('b1');
let b2=document.getElementById('b2');
b1.addEventListener('click',intervallight);
b2.addEventListener('click',stop);
let timeout;
let a=["Yellow.PNG","Green.PNG","Red.PNG"];
let i=0;

function changeimg(){
    i4.setAttribute('src',a[i]);
    i++;
    if(i==3){
        i=0;
    }
}
function intervallight(){
    timeout=setInterval(changeimg,1000);
}
function stop(){
    clearInterval(timeout);
}