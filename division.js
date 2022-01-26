function clickbutton1(){
    let a=document.getElementById('div1');
    console.log(a.value);
    let b=document.getElementById('div2');
    console.log(b.value);
    let c=document.getElementById('div3');
    c.value=parseInt(a.value) / parseInt(b.value);
}