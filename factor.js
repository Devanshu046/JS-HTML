let input=document.getElementById('t1');
let output=document.getElementById('t2');
let totalfactor=document.getElementById('t3');
let botton=document.getElementById('b1');
botton.addEventListener('click',factor);
function factor(){
    let n=input.value;
    let i;
    let j=0;
    for(i=1;i<=n;i++){   
        if(n%i==0)
        {
            output.value+=i+"\n";
            j++;
        }
        if(i==n)
        {
            totalfactor.value=j;
        }
        else{
            "\n";
        }
        

    }
}