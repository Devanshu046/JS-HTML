let b1=document.getElementById('b1');
let b2=document.getElementById('b2');
let b3=document.getElementById('b3');
let b4=document.getElementById('b4');
let b5=document.getElementById('b5');
let b6=document.getElementById('b6');
let b7=document.getElementById('b7');

//map mathod
b1.addEventListener('click',()=>{
    const a=[2,3,4,5];
    const b=a.map(double);
    console.log(b);
});
function double(n,i){
    console.log(`${i} ${n}`);
    return n*2;
}

//filter method
b2.addEventListener('click',()=>{
    const cities=["amdavad","surat","vadodra"];
    const new1=cities.filter(check);
    console.log(new1);
});
function check(city){
    return city.length>5;
}

//join and toString method
b3.addEventListener('click',()=>{
    const country=["india","japan","chaina","canada"];
    const country1=country.join(',');
    const country2=country.toString();
    console.log(country);
    console.log(country1);
    console.log(country2);
});

//split method
b4.addEventListener('click',()=>{
    const data='india,japan,chaina,canada';
    const country=data.split(',');
    console.log(data);
    console.log(country);
});

//slice method
b5.addEventListener('click',()=>{
    const country=["india",'chain','japan','uk'];
    console.log(country);
    const c1=country.slice(1);
    console.log(c1);
    const c2=country.slice(1,3);
    console.log(c2);
    const c3=country.slice(-2);
    console.log(c3);
});

//findindex method
b6.addEventListener('click',()=>{
    const n1=[1,20,45,85,95];
    const max=(element)=>element==20;
   // const max=(element)=>element>40;
    console.log(n1.findIndex(max));
});

//for each method
b7.addEventListener('click',()=>{
    const no1=[11,22,33,44,55,66];
    no1.forEach((data)=>{
        console.log(data);
    })
});
