let t1=document.getElementById('t1');
let b1=document.getElementById('b1');
b1.addEventListener('click',demo);
function demo(){
    t1.value=Math.floor(((Math.random()) * 10) + 1);
   
}