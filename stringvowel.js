let t1=document.getElementById('t1');
let b1=document.getElementById('b1');
b1.addEventListener('click',stringvowel);

function stringvowel(){
    let s1=(t1.value).toLocaleLowerCase();
    console.log(s1);
}