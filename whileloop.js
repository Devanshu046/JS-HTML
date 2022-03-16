let b1=document.getElementById('b1');
let b2=document.getElementById('b2');
b1.addEventListener('click',loop);
b2.addEventListener('click',loop4);

function loop(){
    let i=0;

    while(i<6)
    {
        console.log(i);
        i++;
    }
}

function loop2(){
    
    
    let a=confirm("like to give a party?");

    while(a==false)
    {
        a=confirm("like to give a party?");
    }

    
}
function loop3(){
    while(confirm("like to give a party?")==false)
    {
       // a=confirm("like to give a party?");
    }
}

function loop4(){
    let a;
    do{
        a=confirm("like to give a party?");
    } while(a==false);
}