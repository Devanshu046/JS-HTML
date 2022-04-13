let b1=document.getElementById('b1');
let b2=document.getElementById('b2');
let b3=document.getElementById('b3');
let b4=document.getElementById('b4');
let b5=document.getElementById('b5');
let b6=document.getElementById('b6');
let b7=document.getElementById('b7');
b1.addEventListener('click',sfun);
b2.addEventListener('click',addchar);
b3.addEventListener('click',trim1);
b4.addEventListener('click',index);
b5.addEventListener('click',substringdemo);
b6.addEventListener('click',startswithdemo);
b7.addEventListener('click',padstartdemo);

function sfun(){
   let s1="we wiLL dO It";

   let s2=s1.toUpperCase();
   let s3=s1.toLocaleLowerCase();

   console.log(s1);
   console.log(s2);
   console.log(s3);
}

function addchar(){
    let s1="we will do it";

    let s2=s1.charAt(0);
    let len=s1.length;
    let c=s1.charCodeAt(0)

    console.log(s2);
    console.log(len);
    console.log(c);
}

function trim1(){
    let s="   we will do it  ";

    console.log(s);

    console.log(s.trimStart());
    console.log(s.trimEnd());
    console.log(s.trim());
}

function index(){
    let s="hello";
    let a=s.indexOf("l");

    console.log(a);
}

function substringdemo(){
    const s="mozilla";

    console.log(s.substring(1,3));

    console.log(s.substring(2));
}

function startswithdemo(){
    const s="saturday nights";

    console.log(s.startsWith('sat'));

    console.log(s.startsWith('abc'));
}

function padstartdemo(){
    let s="525";

    console.log(s.padStart(5,'0'));

    console.log(s.padStart(5));
}