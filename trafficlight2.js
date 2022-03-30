// let i1=document.getElementById('i1');
// let i2=document.getElementById('i2');
// let i3=document.getElementById('i3');
let i4=document.getElementById('i4');
let t1=document.getElementById('t1');
let t2=document.getElementById('t2');
let t3=document.getElementById('t3');
let b1=document.getElementById('b1');
b1.addEventListener('click',timeoutlights);
let a=["Yellow.PNG","Green.PNG","Red.PNG"];
const b=[(+t1.value),(+t2.value),(+t3.value)];
let j=0;
let i=0;
let timeout;
function timeoutlights(){
   timeout=setInterval(settime,b[j]);

}
function changeimg(){
  i4.setAttribute('src',a[i]);
   if(i==3){
       clearInterval(timeout)
   }
   i++;
  j++;
}