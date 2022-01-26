
let a=document.getElementById('d1');
let b=document.getElementById('d2');
let c=document.getElementById('d3');
let d=document.getElementById('buttoncircle');
let e=document.getElementById('clr');
d.addEventListener('click',areaofcircle);
e.addEventListener('click',clearall);
function areaofcircle(){
    
    b.value=(Math.PI*Math.pow(a.value,2)).toFixed(2);
    c.value=(2*Math.PI*a.value).toFixed(2);
}
function clearall(){
    document.getElementById('d1').value='';
    document.getElementById('d2').value='';
    document.getElementById('d3').value='';
}