let a=document.getElementById('p1');
a.addEventListener('click',demo);
function demo(){
    let sign = prompt("What's your sign?");

if (sign.toLowerCase() == "scorpio") {
  alert("Wow! I'm a Scorpio too!");
}

// there are many ways to use the prompt feature
//sign = window.prompt(); // open the blank prompt window
//sign = prompt();       //  open the blank prompt window
sign = window.prompt('Are you feeling lucky');
 //console.log(sign);
 
sign = window.prompt('Are you feeling lucky', 'sure'); // open the window with Text "Are you feeling lucky" and default value "sure"
if(sign==null)
 {
     console.log('nothing');
 }
}