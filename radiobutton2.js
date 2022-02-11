let a=document.getElementById('r1');
let b=document.getElementById('r2');
let c=document.getElementById('r3');
let t=document.getElementById('t1');
let t1=document.getElementById('t2');
let bt=document.getElementById('b1');
bt.addEventListener('click',buttonclick2);
t1.addEventListener('change',textchange);
a.addEventListener('change',changeradiobutton);
b.addEventListener('change',changeradiobutton);
c.addEventListener('change',changeradiobutton);

function buttonclick2(){
    if(t.value.toLowerCase()=="windows"){
       a.checked=true;
    }
    else if(t.value.toLowerCase()=="linux"){
        b.checked=true;
    }
    else if(t.value.toLowerCase()="mac"){
       c.checked=true;
    }
}
function textchange(){
    console.log(t1.value);
}
function changeradiobutton(event){
    console.log("radio button selected");
    console.log(event);
    console.log(event.target.value);
    console.log(event.target.id);
}