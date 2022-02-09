let a=document.getElementById('r1');
let b=document.getElementById('r2');
let c=document.getElementById('r3');
let d=document.getElementById('s1');
let e=document.getElementById('s2');
let f=document.getElementById('s3');
let bt=document.getElementById('b1');
let t=document.getElementById('t1');
bt.addEventListener('click',buttonclick1);
function buttonclick(){
 if(a.checked){
     //t.value=a.value;
     if(d.checked){
         t.value=a.value +"-"+ d.value;
     }
     else if(e.checked){
         t.value=a.value +"-"+ e.value;
     }
     else{
         t.value=a.value +"-"+ f.value;
     }
 }
 else if(b.checked){
     //t.value=b.value;
    if(d.checked){
        t.value=b.value +"-"+ d.value;
    }
    else if(e.checked){
        t.value=b.value +"-"+ e.value;
    }
    else{
        t.value=b.value +"-"+ f.value;
    }
 }
 else{
     //t.value=c.value;
     if(d.checked){
        t.value=c.value +"-"+ d.value;
    }
    else if(e.checked){
        t.value=c.value +"-"+ e.value;
    }
    else{
        t.value=c.value +"-"+f.value;
    }
 }
}
function buttonclick1(){
    if(a.checked){
         t.value=a.value;
    }
    else if(b.checked){
        t.value=b.value;
    }
    else{
        t.value=c.value;
    }
    if(d.checked){
        t.value+="-"+d.value;
    }
    else if(e.checked){
        t.value+="-"+e.value;
    }
    else{
        t.value+="-"+f.value;
    }
}