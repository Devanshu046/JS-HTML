let a=document.getElementById('t1');
let b=document.getElementById('t2');
let c=document.getElementById('t3');
let d=document.getElementById('t4');
let e=document.getElementById('b1');

e.addEventListener('click',maximum);

function maximum(){
    if((+a.value)>(+b.value)&&((+a.value)>(+c.value)))
    {
        d.value=a.value;
        
    }
    else if((+b.value)>(c.value))
    {
        d.value=b.value;
    }
    else
    {
        d.value=c.value;
    }

}