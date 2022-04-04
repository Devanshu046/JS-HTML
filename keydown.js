let t1=document.getElementById('t1');
t1.addEventListener('keydown',logkey1);

function logkey1(event){
    console.log('keydown');
    console.log(event.key);
    console.log(event.key.toString());
    console.log(event.key.toString().charCodeAt(0));
   // console.log(event.code);
    event.preventDefault();
}