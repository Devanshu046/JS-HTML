let b1=document.getElementById('b1');
let b2=document.getElementById('b2');
let b3=document.getElementById('b3');
let b4=document.getElementById('b4');

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