let s1=document.getElementById('s1');
let t1=document.getElementById('t1');
let b1=document.getElementById('b1');
let b2=document.getElementById('b2');
let b3=document.getElementById('b3');
let i1=document.getElementById('i1');
// let o1=document.getElementById('o1');
// let o2=document.getElementById('o2');
// let o3=document.getElementById('o3');
b1.addEventListener('click',selectoption);
b2.addEventListener('click',showtext);
b3.addEventListener('click',changeimg);

// function selectoption(){
//     s1.value=t1.value;
// }
// function selectoptin(){
//     if(t1.value=="computer")
//     {
//         s1.value=o1.value;
//     }
//     else if(t1.value="table")
//     {
//         s1.value=o2.value;
//     }
//     else if(t1.value="chair")
//     {
//         s1.value=o3.value;
//     }
// }
function selectoption(){
    let options = s1.options;
    let i;
    for (i = 0; i < options.length; i++)
     {
        // console.log(options[i].value);
        // console.log(options[i].label);
        if (options[i].label == t1.value) {
            s1.value = options[i].value;
        }
        
    }
}
function showtext(){
    t1.value=s1.value;

}
function changeimg(){
    i1.setAttribute('src',"download.jpg");
   
}
function alloptions() {
    let options = s1.options;
    console.log(options.length);
    console.log(options[0].label);
    console.log(options[0].value);
}