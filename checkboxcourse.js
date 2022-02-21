let a=document.getElementById('i1');
let b=document.getElementById('i2');
let c=document.getElementById('i3');
let t=document.getElementById('t1');
let bt=document.getElementById('b1');
bt.addEventListener('click',course);
function course(){
    if(a.checked)
    {
        t.value=a.value;
    }
    if(b.checked)
    {
        t.value+=","+b.value;
    }
    if(c.checked)
    {
        t.value+=","+c.value;
    }
}