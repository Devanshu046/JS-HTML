let t1=document.getElementById('t1');
let t2=document.getElementById('t2');
let t3=document.getElementById('t3');
let b1=document.getElementById('b1');
b1.addEventListener('click',border);

function border(){
let rn=(+t1.value);
let nm=t2.value;
let sm=(+t3.value);
document.write("<table border='1'>");
    document.write("<tr>");
    document.write("<td>(+t1.value)</td>");
    document.write("<td>(t2.value)</td>");
    document.write("<td>(+t3.value)</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>1</td>");
    document.write("<td>1</td>");
    document.write("<td>1</td>");
    document.write("</tr>");

document.write("</table>");
}