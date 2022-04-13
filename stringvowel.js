let t1=document.getElementById('t1');
let b1=document.getElementById('b1');
b1.addEventListener('click',stringvowel);

function stringvowel(){
    
    let s1=(t1.value).toLocaleLowerCase();
    let len=s1.length;
    let i=0;
    let a=0;

    for(i=0;i<=len-1;i++)
    {
        if((s1[i])=="a" || (s1[i])=="e" || (s1[i])=="i" || (s1[i])=="o" || (s1[i])=="u")
        {
            a++;
            
        }
        
    }
    console.log(a);
}