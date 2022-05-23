let b1=document.getElementById('b1');
b1.addEventListener('click',demofun);

function demofun(){
    const {PI ,E} =Math;
    console.log(PI);
    console.log(E);

    let a,b;
    [a,b]=[1,2];
    console.log(a);
    console.log(b);

    let x,y;
    x=1;
    y=2;

    console.log(x);
    console.log(y);
    [x,y]=[y,x];
    console.log(x);
    console.log(y);

    const [n,z,,r]=[10,20,30,40];
    console.log(n);
    console.log(z);
    console.log(r);

    const [f,...p]=[10,20,30,40];
    console.log(p);
    console.log(f);
   // console.log(r);
}