let b1=document.getElementById('b1');
b1.addEventListener('click',interval);
let timerid;
let a=97;
function alphafun(){
    
    
    n=String.fromCharCode(a);
    console.log(n); 
    if(a==122){
        clearInterval(timerid);
    }     
    a++;
}

function interval(){
    timerid=setInterval(alphafun,1000);    
}