let b1=document.getElementById('b1');
let b2=document.getElementById('b2');
let b3=document.getElementById('b3');
let b4=document.getElementById('b4');
let b5=document.getElementById('b5');
let b6=document.getElementById('b6');
b1.addEventListener('click',demo);
b2.addEventListener('click',constructordemo);
b3.addEventListener('click',car1demo);
b4.addEventListener('click',car2demo);
b5.addEventListener('click',employeedemo);
b6.addEventListener('click',employeedemo2)

function demo(){
    let product={
        id:101,
        name:'dettol',
        rate:50
    }
    console.log(product);
    console.log(product.id);
    console.log(product['name']);

    for(var i in product)
    {
        console.log(i);
        console.log(product[i]);
    }
}

function constructordemo(){
    let mycar=new Car('maruti','swift','2022');
    console.log(mycar);
    console.log(Object.keys(mycar));
    for(var i in mycar)
    {
        console.log(mycar[i]);
    }
}
function Car(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
};
function car1demo(){
    Car.prototype.color='red';
    
    let car1=new Car('hero','scooty','2021');
    car1.gear=5;
    console.log(car1);
    console.log('hero' in car1);
    console.log('gear' in car1);
    delete car1.gear;
    console.log(car1);

}
function car2demo(){
    let car2= new Car('honda','activa','2020');
    console.log(car2);
}

function Employee(id,firstname,designation){
       this.id=id;
       this.firstname=firstname;
       this.designation=designation;
}
let e1=new Employee('50','dev','admin');
function employeedemo(){
    console.log(e1);
}
function employeedemo2(){
    let e2=e1;
    console.log(e2);
    e2.designation='hr';
   // console.log(e2);
   // console.log(e1);

    let e3=Object.assign({},e1);
    console.log(e3);
    e3.designation='admin';
    console.log(e3);
    console.log(e1);
}
