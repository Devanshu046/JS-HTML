let b1=document.getElementById('b1');
let b2=document.getElementById('b2');
let b3=document.getElementById('b3');
let timerid;
b1.addEventListener('click',settimefun);
b2.addEventListener('click',setintervalfun);
b3.addEventListener('click',stopbutton);

function settimefun(){
    setTimeout(sayhello,5000);

}
function sayhello(){
    console.log("hello");
}

function setintervalfun(){
    timerid=setInterval(sayhello,2000);
    
}
function stopbutton(){
    clearInterval(timerid);
}
