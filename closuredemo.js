let b1=document.getElementById('b1');
b1.addEventListener('click',btn1);

function btn1(){
  init();
}

function init() {
    var name = 'Mozilla'; 
    function displayName() { 
    alert(name);
    }
    displayName();
   
  }
  