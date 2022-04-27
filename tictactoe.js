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

function demo1(){

    //this.innerHTML="X";
   
    if(this.innerHTML=="")
    {
        this.innerHTML=0;
    }

    else if(this.innerHTML==0)
    {
        this.innerHTML="x";
    }

    else if((b1.innerHTML && b2.innerHTML && b3.innerHTML) || (b1.innerHTML && b4.innerHTML && b7.innerHTML) || (b3.innerHTML && b6.innerHTML && b9.innerHTML) || (b7.innerHTML && b8.innerHTML && b9.innerHTML) || (b1.innerHTML && b5.innerHTML && b9.innerHTML)== "X")
{
    console.log("winner X")
}
else if((b1.innerHTML && b2.innerHTML && b3.innerHTML) || (b1.innerHTML && b4.innerHTML && b7.innerHTML) || (b3.innerHTML && b6.innerHTML && b9.innerHTML) || (b7.innerHTML && b8.innerHTML && b9.innerHTML) || (b1.innerHTML && b5.innerHTML && b9.innerHTML)==0)
{
    console.log("winner 0");
}
else if((b1.innerHTML && b2.innerHTML && b3.innerHTML) || (b1.innerHTML && b4.innerHTML && b7.innerHTML) || (b3.innerHTML && b6.innerHTML && b9.innerHTML) || (b7.innerHTML && b8.innerHTML && b9.innerHTML) || (b1.innerHTML && b5.innerHTML && b9.innerHTML)!=(0 || "X"))
{
    console.log("draw");
}

    
   
}
