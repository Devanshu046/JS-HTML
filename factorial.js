let input=document.getElementById('t1');
let output=document.getElementById('t2');
let botton=document.getElementById('b1');
botton.addEventListener('click',factorial);
function factorial(){
    let n=input.value;
    let factorial=1;
    for(i=1;i<=n;i++)
    {
        factorial*=i;
    }
    output.value+=factorial+"\n";
}