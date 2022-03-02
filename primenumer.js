let input=document.getElementById('t1');
let output=document.getElementById('t2');
let textarea=document.getElementById('t3');
let input2=document.getElementById('t4');
let output2=document.getElementById('t5');
let botton=document.getElementById('b1');
let botton2=document.getElementById('b2');
let botton3=document.getElementById('b3');
botton.addEventListener('click',primeno);
botton2.addEventListener('click',primeno2);
botton3.addEventListener('click',nprime);

function primeno()
{
    let n=input.value;
    let j=isPrime(n);
    if(j==true)
    {
        output.value="prime number";
    }
    else{
        output.value="not prime number";
    }
}

function primeno2(){
    let i;
    for(i=2;i<=20;i++)
    {
        let j=isPrime(i);
        if(j==true){
            textarea.value+=i+"\n";
        }
    }
}
function nprime(){
    let i;
    let k=0;
    let n=input2.value;
    for(i=1;i<=100;i++){
        let j=isPrime(i);
        if(j==true  && k<n){
            output2.value+=i+"\n";
            k++;
        }
    }
}
function isPrime(n){
    let j=0;
    let i;

    for(i=1;i<=n;i++)
    {
        if(n%i==0)
        {
            j++;
        }
    }
    if(j==2){
        return true;
    }
    else{
        return false;
    }
}
    // function primeno2(){
//     let k=0;
//     for(i=2;i<=20;i++){
//         for(j=1;j<=20;j++){
//             if(i%j==0){
//                 k++;
//             }

//         }
        
//         if(k==2)
//         {
//         textarea.value+=i + "\n";
//         }
//         else{
//             "\n";
//         }
//         k=0;
//     }
    
// }

