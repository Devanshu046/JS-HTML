function fullname(){
    let a=document.getElementById('div1');
    let b=document.getElementById('div2');
    let c=document.getElementById('div3');
    let d=document.getElementById('div4');
    d.value= (a.value) + (b.value) + (c.value);
}
function clearall(){
    document.getElementById('div1').value='';
    document.getElementById('div2').value='';
    document.getElementById('div3').value='';
    document.getElementById('div4').value='';
}