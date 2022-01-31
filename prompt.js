let a=document.getElementById('p1');
a.addEventListener('click',demo);
function demo(){
    let sign = prompt("What's your sign?");



//sign = window.prompt('Are you feeling lucky');
 //console.log(sign);
 
//sign = window.prompt('Are you feeling lucky', 'sure'); // open the window with Text "Are you feeling lucky" and default value "sure"
if(sign==null)
 {
     console.log('nothing');
     console.log('cancle selected');
 }
 else{
   console.log(sign);
   console.log('ok selected');
 }
}