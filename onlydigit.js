let t1=document.getElementById('t1');
t1.addEventListener('keydown',digit);

function digit(event){

  if((event.key.toString().charCodeAt(0))>=48 && (event.key.toString().charCodeAt(0))<=58)
  {
    //console.log(t1.value);
    console.log(event.key.toString().charCodeAt(0));
  }
  else{
    event.preventDefault();
  }
}