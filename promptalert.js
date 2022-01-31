let a=document.getElementById('p1');
a.addEventListener('click',sum);
function sum(){
    let a=prompt("input a");
    let b=prompt("input b");
   
   // result=alert(parseInt(a.value)+parseInt(b.value));
   //result=parseInt(a.value)+parseInt(b.value);
    //alert((+a)+(+b));
    let c=parseInt(a)+parseInt(b);
    alert(c);
}