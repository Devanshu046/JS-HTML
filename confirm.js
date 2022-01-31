let a=document.getElementById('b1');
a.addEventListener('click',democonfirm);
function democonfirm(){
   
   // confirm('thanks');
   result=confirm("Do you really want to leave?")
   if(result==null)
   {
     console.log('cancle selected');
   }
   else{
     console.log(result);
     console.log('ok selected');
   }
}