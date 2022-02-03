let a=document.getElementById('b1');
let b=document.getElementById('t1');//cost
let c=document.getElementById('t2');//sales
let d=document.getElementById('t3');
let e=document.getElementById('t4');
let f=document.getElementById('t5');

a.addEventListener('click',profitloss);
function profitloss(){
    if((+c.value)>(+b.value))//sales>cost
    {
    d.value='profit';
    e.value=(+c.value)-(+b.value);
    }
    else//cost>sales
    {
     d.value='loss';
     e.value=(+b.value)-(+c.value);
    }
    f.value=e.value*100/(+b.value);
}