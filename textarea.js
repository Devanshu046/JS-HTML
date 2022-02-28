let a=document.getElementById('t1');
let b=document.getElementById('t2');
let bt=document.getElementById('b1');
bt.addEventListener('click',sumtext);
// function areatext(){
//     let i=0;
//     a.value="";
//     for(i=0;i<=10;i++)
//     {
//         a.value+=i + "\n";
//     }
// }
function sumtext(){
    let i=1;
    let j=0;
    let n=a.value;
    b.value="";
    for(i=1;i<=n;i++)
    {
     j+=i; 
     b.value+=i+"\n"; 
    }
    b.value+= j +"\n";
    

}