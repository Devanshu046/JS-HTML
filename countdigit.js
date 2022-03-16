let t1=document.getElementById('t1');
let t2=document.getElementById('t2');
let t3=document.getElementById('t3');
let t4=document.getElementById('t4');
let b1=document.getElementById('b1');
let b2=document.getElementById('b2');
b1.addEventListener('click',countdigit);
b2.addEventListener('click',reverseno);


function countdigit(){
    let n=(+t1.value);
    let division;
    let sum=0;
    let i=0;
    
    while(n!=0){
      modulo=n%10;          //341%10=1          //34%10=4       //3%10=3
      sum+=modulo;
      division=n/10;      //340/10=34         //30/10=3        //0/10=0
      n=parseInt(division);            //n=34              //n=3            //n=0
      i++;                     //i=1             //i=2         //i=3   
    }
    t2.value=i;
    t3.value=sum;
}

function reverseno(){
    let n=(+t1.value);
    let modulo;
    let reverse=0;
    let division;

    while(n!=0){
        modulo=n%10;
        reverse=reverse*10+modulo;
        division=n/10;
        n=parseInt(division);

    }
    t4.value=reverse;

}