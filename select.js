let s1=document.getElementById('s1');
let t1=document.getElementById('t1');
let b1=document.getElementById('b1');
let b2=document.getElementById('b2');
let b3=document.getElementById('b3');
b1.addEventListener('click',selectimg);
b2.addEventListener('click',selecttext);
b3.addEventListener('click',changeimg);

function selectimg(){
    s1.value=t1.value;
}
function selecttext(){
    t1.value=s1.value;
}
function changeimg(){
    //d1.setAttribute('src',"myWallpaper6.jpg");
    d1.jpg=myWallpaper6.jpg;
}