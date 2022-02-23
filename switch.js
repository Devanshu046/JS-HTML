let a=document.getElementById('t1');
let b=document.getElementById('t2');
let bt=document.getElementById('b1');
bt.addEventListener('click',switch1);
function switch1(){
    let c=parseInt(a.value);
    switch(c){
        case 1:
            b.value="sunday";
            break;
        case 2:
            b.value="monday";
            break;
        case 3:
            b.value="tuesday";
        case 4:
            b.value="wednesday";
            break;
        case 5:
            b.value="thursday";
            break;
        case 6:
            b.value="friday";
            break;
        case 7:
            b.value="saturday";
            break;
        default:
            b.value="enter between 1 to 7";
    }

}