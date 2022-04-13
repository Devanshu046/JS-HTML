let t1=document.getElementById('t1');
let t2=document.getElementById('t2');
let b1=document.getElementById('b1');
b1.addEventListener('click',searchstr);

function searchstr(){
    const s1=t1.value;
    let s2=t2.value;
    let a=s1.indexOf(s2);
    let i=0;
   

    while(a != -1)
    {
    
        i++;
        a=s1.indexOf(s2,(a+1));
    }
    console.log(i);
    
    
}