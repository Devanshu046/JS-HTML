let a=document.getElementById('i1');
let b=document.getElementById('i2');
let c=document.getElementById('i3');
let t=document.getElementById('t1');
let bt=document.getElementById('b1');
bt.addEventListener('click',selectcheckbox);
function selectcheckbox(){
    if(t.value.toLocaleLowerCase()=="c#"){
        a.checked=true;
        // b.checked=false;
        // c.checked=false;
    }
    else if(t.value.toLocaleLowerCase()=="java"){
        b.checked=true;
        // a.checked=false;
        // c.checked=false;
    }
    else if(t.value.toLocaleLowerCase()=="javascript"){
        c.checked=true;
        // b.checked=false;
        // a.checked=false;
    }
}