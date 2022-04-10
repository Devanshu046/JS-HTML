let t1=document.getElementById('t1');
let b1=document.getElementById('b1');
b1.addEventListener('click',palindrome);

function palindrome(){
    let s1=(t1.value).toLocaleLowerCase();
    let len=s1.length;
    let i=0;
    let a=0;
    let j=0;
    const s2=[];

    for(i=len-1;i>=0;i--)
    {
      s2[j]=s1[i];
      j++;
       
    }

    for(i=0;i<=len-1;i++)
    {
        if(s1[i]==s2[i])
        {
            a++;
        }
    }
    if(a==len)
    {
        console.log("palindrome");
    }
    else{
        console.log("not a palindrome");
    }
   
}