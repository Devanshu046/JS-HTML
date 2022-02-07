let a=document.getElementById('r1');
let b=document.getElementById('r2');
let c=document.getElementById('r3');
let bt=document.getElementById('b1');
let t=document.getElementById('t1');
bt.addEventListener('click',buttonclick);
function buttonclick(){
 if(a.checked){
     t.value=a.value;
 }
 else if(b.checked){
     t.value=b.value;
 }
 else{
     t.value=c.value;
 }
}