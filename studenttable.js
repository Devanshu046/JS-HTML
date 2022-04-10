let b1=document.getElementById('b1');
let d1=document.getElementById('d1');
let t1=document.getElementById('t1');
let t2=document.getElementById('t2');
let t3=document.getElementById('t3');

b1.addEventListener('click',table1);

function table1(){    
    let a=document.createElement('div');

    d1.appendChild(a);
    let table=document.createElement('table');
    let tbody=document.createElement('tbody');
    let thead=document.createElement('thead');
   
    let row=document.createElement('tr');
    let column1=document.createElement('th');
    column1.innerHTML="Roll No ";
   
    let column2=document.createElement('th');
    column2.innerHTML="Name";
   
    let column3=document.createElement('th');
    column3.innerHTML="Semester";
    
    //2row
    let row2=document.createElement('tr');
    let column21=document.createElement('td');
    column21.innerHTML=(+t1.value);

    let column22=document.createElement('td');
    column22.innerHTML=t2.value;

    let column23=document.createElement('td');
    column23.innerHTML=(+t3.value);


    d1.appendChild(table);
    table.appendChild(tbody);
    table.appendChild(thead);
    thead.appendChild(row);
    row.appendChild(column1);
    row.appendChild(column2);
    row.appendChild(column3);
    tbody.appendChild(row2);
    row2.appendChild(column21);
    row2.appendChild(column22);
    row2.appendChild(column23);
   
}