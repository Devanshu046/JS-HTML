let a=document.getElementById('t1');
let c=document.getElementById('t2');
let bt=document.getElementById('b1');
bt.addEventListener('click',checkvowel);
function checkvowel(){
    let b=a.value.toLowerCase();
    
    if(b=="a"||b=="e"||b=="i"||b=="o"||b=="u")
    {
        c.value="vowel";
    }
    else{
        c.value="not vowel";
    }
}