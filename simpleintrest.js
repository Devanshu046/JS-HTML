
function simpleintrest(){
    let a=document.getElementById('div1');
    let b=document.getElementById('div2');
    let c=document.getElementById('div3');
    let d=document.getElementById('div4');
    let e=document.getElementById('div5');
    d.value=(parseInt(a.value)*parseInt(b.value)*parseInt(c.value))/100;
    document.getElementById('div4').style.color='red';
    e.value=parseInt(a.value)+parseInt(d.value);
    document.getElementById('div5').style.color='blue';
}
function clearall(){
    document.getElementById('div1').value='';
    document.getElementById('div2').value='';
    document.getElementById('div3').value='';
    document.getElementById('div4').value='';
    document.getElementById('div5').value='';
}