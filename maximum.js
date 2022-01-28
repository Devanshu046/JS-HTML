let a=document.getElementById('t1');
let b=document.getElementById('t2');
let c=document.getElementById('t3');
let d=document.getElementById('convert');
let e=document.getElementById('clr');
d.addEventListener('click',maximum);
e.addEventListener('click',clearall);
function maximum(){
    let num1=+a.value;
    let num2=+b.value;

    if(num1>num2){
         c.value=num1;
    }
    else
    {
        c.value=num2;
    }

}
function clearall(){
    a.value='';
    b.value='';
    c.value='';

}