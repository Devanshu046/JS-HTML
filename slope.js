let a=document.getElementById('t1');
let b=document.getElementById('t2');
let c=document.getElementById('t3');
let d=document.getElementById('t4');
let e=document.getElementById('t5');

let bt=document.getElementById('b1');
bt.addEventListener('click',slope);

function slope(){
   
  e.value=(+d.value)-(+b.value)/(+c.value)-(+a.value);
  // let p=(+c.value)-(+a.value);
  // let q=(+d.value)-(+b.value);
  // e.value=(q/p);
}