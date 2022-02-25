let a=document.getElementById('t1');
let b=document.getElementById('t2');
let bt=document.getElementById('b1');
bt.addEventListener('click',switchmonth);
function switchmonth(){
    let c=parseInt(a.value);
    switch(c){
        case 1:
            b.value="january";
            break;
        case 2:
            b.value="fabruary";
            break;
        case 3:
            b.value="march";
        case 4:
            b.value="april";
            break;
        case 5:
            b.value="may";
            break;
        case 6:
            b.value="june";
            break;
        case 7:
            b.value="july";
            break;
        case 8:
            b.value="august";
            break;
        case 9:
            b.value="september";
            break;
        case 10:
            b.value="october";
            break;
        case 11:
            b.value="november";
            break;
        case 12:
            b.value="december";
            break;
        default:
            b.value="enter between 1 to 12";
    }

}