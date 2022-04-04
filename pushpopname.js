let t1=document.getElementById('t1');
let b1=document.getElementById('b1');
let b2=document.getElementById('b2');
let b3=document.getElementById('b3');
let t2=document.getElementById('t2');
let t3=document.getElementById('t3');

const name1=[];

b1.addEventListener('click',()=>{
    name1.push(t1.value);
    console.log(name1);
    t3.value=name1;
    t1.value="";
});

b2.addEventListener('click',()=>{

    name1.pop();
    console.log(name1);
    t3.value=name1;
      
});

b3.addEventListener('click',()=>{
    a=(+t2.value) 
    let n=name1.slice(a);
    t3.value=n;
    console.log(name1);
});


