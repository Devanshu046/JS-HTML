let a=document.getElementById('i1');
let b=document.getElementById('t1');
let bt=document.getElementById('b1');
bt.addEventListener('click',checkbox1);
function checkbox1()
{
    if(a.checked)
    {
        b.value="agreed";
    }
    else{
        b.value="not agree";
    }
}