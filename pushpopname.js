let t1=document.getElementById('t1');
let b1=document.getElementById('b1');
let b2=document.getElementById('b2');

b1.addEventListener('click',push1);
const name1=new Array();
function push1(){
    
    name1.push(t1.value);
    console.log(name1);
    
}

b2.addEventListener('click',()=>{
      
});