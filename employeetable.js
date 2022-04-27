let b1=document.getElementById('b1');
let d1=document.getElementById('d1');
let t1=document.getElementById('t1');
let t2=document.getElementById('t2');
let t3=document.getElementById('t3');
let t4=document.getElementById('t4');

b1.addEventListener('click',employeetable);
  
    let a=document.createElement('div');
    d1.appendChild(a);
   
    let table=document.createElement('table');
    let tbody=document.createElement('tbody');
    let thead=document.createElement('thead');
    let row=document.createElement('tr');

    let column1=document.createElement('th');
    column1.innerHTML="Employee Id ";
   
    let column2=document.createElement('th');
    column2.innerHTML="Name";
   
    let column3=document.createElement('th');
    column3.innerHTML="Designation";

    let column4=document.createElement('th');
    column4.innerHTML="salary";
    
    table.appendChild(tbody);
    table.appendChild(thead);
    d1.appendChild(table);
    thead.appendChild(row);
    
   
function employeetable(){
   
    let row2=document.createElement('tr');
    let column21=document.createElement('td');
    column21.innerHTML=(+t1.value);

    let column22=document.createElement('td');
    column22.innerHTML=t2.value;

    let column23=document.createElement('td');
    column23.innerHTML=t3.value;

    let column24=document.createElement('td');
    column24.innerHTML=(+t4.value);

    let b=document.createElement('button');
    b.innerHTML="remove";
     
    row.appendChild(column1);
    row.appendChild(column2);
    row.appendChild(column3);
    row.appendChild(column4);
    tbody.appendChild(row2);
    row2.appendChild(column21);
    row2.appendChild(column22);
    row2.appendChild(column23);
    row2.appendChild(column24);
    row2.appendChild(b);

    
   
}

