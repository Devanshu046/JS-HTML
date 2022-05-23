let b1=document.getElementById('b1');
let b2=document.getElementById('b2');
let b3=document.getElementById('b3');
let b4=document.getElementById('b4');
let b5=document.getElementById('b5');
let b6=document.getElementById('b6');
let b7=document.getElementById('b7');
let b8=document.getElementById('b8');
let b9=document.getElementById('b9');



b1.addEventListener('click',demo1);
b2.addEventListener('click',demo1);
b3.addEventListener('click',demo1);
b4.addEventListener('click',demo1);
b5.addEventListener('click',demo1);
b6.addEventListener('click',demo1);
b7.addEventListener('click',demo1);
b8.addEventListener('click',demo1);
b9.addEventListener('click',demo1);

let a=true;
function demo1(){

    
   
    if(a==true)
    {
        this.innerHTML=0;
    }

    else 
    {
        this.innerHTML="X";
    }
    a=!a;
    this.disabled=true;

    if(((b1.innerHTML)==(b2.innerHTML))&&((b1.innerHTML)==(b3.innerHTML)) && (b1.disabled==true))
    {
        console.log("winner is:" + b1.innerHTML);
    }

    else if(((b1.innerHTML)==(b4.innerHTML))&&((b1.innerHTML)==(b7.innerHTML)) && (b1.disabled==true))
    {
        console.log("winner is:" + b1.innerHTML);
    }

    else if(((b1.innerHTML)==(b5.innerHTML))&&((b1.innerHTML)==(b9.innerHTML)) && (b1.disabled==true))
    {
        console.log("winner is:" + b1.innerHTML);
    }
    else if (((b9.innerHTML)==(b7.innerHTML))&&((b9.innerHTML)==(b3.innerHTML)) && (b9.disabled==true))
    {
        console.log("winner is:" + b9.innerHTML);
    }
    else if(((b7.innerHTML)==(b8.innerHTML))&&((b7.innerHTML)==(b9.innerHTML)) && (b7.disabled==true))
    {
        console.log("winner is:" + b7.innerHTML);
    }
    else if(((b3.innerHTML)==(b5.innerHTML))&&((b3.innerHTML)==(b7.innerHTML)) && (b3.disabled==true))
    {
        console.log("winner is:" + b3.innerHTML);
    }
    else if(((b2.innerHTML)==(b5.innerHTML))&&((b2.innerHTML)==(b8.innerHTML)) && (b2.disabled==true))
    {
        console.log("winner is:" + b2.innerHTML);
    }
   
}
