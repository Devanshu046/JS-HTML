let a=document.getElementById('t1');
let b=document.getElementById('t2');
let c=document.getElementById('b1');
c.addEventListener('click',oddeven);

function oddeven(){
    if((+a.value)==0)
    {
        b.value='zero';
    }
    else if((+a.value)%2==0)
    {
        b.value='even';
    }
    else{
        b.value='odd';
    }
}
