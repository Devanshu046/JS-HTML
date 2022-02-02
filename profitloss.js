let a=document.getElementById('b1');
let b=document.getElementById('t1');//cost
let c=document.getElementById('t2');//sales
let d=document.getElementById('t3');
let e=document.getElementById('t4');
let f=document.getElementById('t5');

a.addEventListener('click',profitloss);
function profitloss(){
    if(c.value>b.value)//sales>cost
    {
    d.value='profit';
    }
    if(b.value>c.value)//cost>sales
    {
     d.value='loss';
    }
    e.value=(+c.value)-(+b.value);
    f.value=(((+c.value)-(+b.value))*100/(+c.value)).toFixed(2);
}