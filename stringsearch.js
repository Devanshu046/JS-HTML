let t1=document.getElementById('t1');
let t2=document.getElementById('t2');
let b1=document.getElementById('b1');
b1.addEventListener('click',searchstr);

function searchstr(){
    let s1=t1.value;
    let s2=t2.value;
    console.log(s1.startsWith(s2));
    let s3=s1.indexOf(s2);
    console.log(s3);
}