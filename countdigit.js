let t1=document.getElementById('t1');
let t2=document.getElementById('t2');
let b1=document.getElementById('b1');
b1.addEventListener('click',countdigit);

function countdigit(){
    let n=(+t1.value);
    let division;
    let modulus;
    let sub;
    let i=0;
    do{
      modulo=n%10;          //341%10=1          //34%10=4       //3%10=3
      sub=n-modulo;         //341-1=340         //34-4=30         //3-3=0
      division=sub/10;      //340/10=34         //30/10=3        //0/10=0
      n=division;            //n=34              //n=3            //n=0
      i++;                     //i=1             //i=2         //i=3
       

    }while(n!=0)
    t2.value=i;
    
}