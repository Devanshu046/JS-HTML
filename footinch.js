let a=document.getElementById('t1');
let b=document.getElementById('t2');
let c=document.getElementById('t3');
let d=document.getElementById('footinch');
let e=document.getElementById('clr');

d.addEventListener('click',footinch);
e.addEventListener('click',clearall);

function footinch(){

    c.value=a.value%12;
    //b.value=(a.value)/12-(c.value/12);
    b.value=parseInt(a.value/12);
}
function clearall(){
    document.getElementById('t1').value='';
    document.getElementById('t2').value='';
    document.getElementById('t3').value='';
}