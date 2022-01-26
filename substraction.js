function clickbutton1(){
    let a=document.getElementById('div1');
    let b=document.getElementById('div2');
    let c=document.getElementById('div3');
    c.value=parseInt(a.value) - parseInt(b.value);
}