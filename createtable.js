let b1=document.getElementById('b1');
let d1=document.getElementById('d1');


b1.addEventListener('click',table1);

function table1(){
    let a=document.createElement('div');
    d1.appendChild(a);
    let table=document.createElement('table');
    let tbody=document.createElement('tbody');
    let thead=document.createElement('thead');
   
    let row=document.createElement('tr');
    let column1=document.createElement('th');
    column1.innerHTML="roll no ";
   
    let column2=document.createElement('th');
    column2.innerHTML="name";
   
    let column3=document.createElement('th');
    column3.innerHTML="semester";
    

    d1.appendChild(table);
    table.appendChild(tbody);
    table.appendChild(thead);
    thead.appendChild(row);
    row.appendChild(column1);
    row.appendChild(column2);
    row.appendChild(column3);

    
}