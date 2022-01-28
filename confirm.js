let a=document.getElementById('b1');
a.addEventListener('click',democonfirm);
function democonfirm(){
   
   // confirm('thanks');
    if (window.confirm("Do you really want to leave?")) {
        alert( "Thanks for Visiting!");
      }
}