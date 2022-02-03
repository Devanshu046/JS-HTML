let a=document.getElementById('t1');
let b=document.getElementById('t2');
let c=document.getElementById('b1');
c.addEventListener('click',positivenegative);

function positivenegative(){
    if((+a.value)>0)
    {
        b.value='positive';
    }
    else if((+a.value)<0)
    {
        b.value='negative';
    }
    else
    {
        b.value='zero';
    }
}
