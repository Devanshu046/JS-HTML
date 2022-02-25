let a=document.getElementById('t1');
let b=document.getElementById('t2');
let c=document.getElementById('t3');
let d=document.getElementById('t4');
let e=document.getElementById('t5');

let bt=document.getElementById('b1');
bt.addEventListener('click',area);

function area(){
    d.value=((+a.value)+(+b.value)+(+c.value))/2;

    //e.value=(d.value((d.value)-(+a.value))((d.value)-(+b.value))((d.value)-(+c.value));

    e.value=Math.sqrt((d.value)*(((d.value)-(+a.value))*((d.value)-(+a.value))*((d.value)-(+a.value))));
}