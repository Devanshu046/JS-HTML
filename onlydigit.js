let t1=document.getElementById('t1');
t1.addEventListener('keydown',digit);
let a=1;

function digit(event){
  console.log(event.key);
  console.log(event);
  console.log(event.key.toString().charCodeAt(0));
  if(a==1 && (event.key.toString().charCodeAt(0))==46)
  {
    console.log(event.key.toString().charCodeAt(0));
    a++; 
  }

  else if((event.key.toString().charCodeAt(0))>=48 && (event.key.toString().charCodeAt(0))<=58) 
  {
    //console.log(t1.value);
    console.log(event.key.toString().charCodeAt(0));
  }
  
  
  else{
    event.preventDefault();
  }
}