let b1=document.getElementById('b1');
let d1=document.getElementById('d1');
let b2=document.getElementById('b2');

b1.addEventListener('click',addname);

function addname(){
    let a=document.createElement('div');
    let b=document.createElement('button');
    a.innerHTML="hello";
    b.innerHTML="click";

    d1.appendChild(a);
    d1.appendChild(b);
}