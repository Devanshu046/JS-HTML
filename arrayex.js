let b1=document.getElementById('b1');
let b2=document.getElementById('b2');
let b3=document.getElementById('b3');
let b4=document.getElementById('b4');
let b5=document.getElementById('b5');
b2.addEventListener('click',()=>{
   //alert("hello");
   const cities=['ahemdabad','vadodra'];
   console.log(cities);
   cities.push('surat');
   console.log(cities);
   cities.pop();
   console.log(cities);
});
b1.addEventListener('click',()=>{
      const a=['a','b','c'];
      console.log(a);
      a.unshift('d');
      console.log(a);
      a.shift();
      console.log(a);
});
b3.addEventListener('click',()=>{
     const a=[1,2,3,4,5];
     console.log(a);
     let n=a.indexOf(4);
     console.log(n);
});
b4.addEventListener('click',()=>{
    const birds=['parrot','falcon','owl'];
    for(const bird of birds){
        console.log(bird);
    }
});
b5.addEventListener('click',()=>{
    const day=['mon','tues','wed','sun'];
    console.log(day);
    let result=day.splice(1,2);
    console.log(result);
});