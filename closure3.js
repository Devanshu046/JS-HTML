let b1=document.getElementById('b1');
b1.addEventListener('click',closure3);

let b2=document.getElementById('b2');
b2.addEventListener('click',closure4);



function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);


  function closure3(){
    console.log(add5(2));  // 7
    console.log(add10(2)); // 12
    console.log(makeAdder(2)(20));
  }

  var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment: function() {
        changeBy(1);
      },
  
      decrement: function() {
        changeBy(-1);
      },
  
      value: function() {
        return privateCounter;
      }
    };
  })();
  
  function closure4(){
  console.log(counter.value());  // 0.
  
  counter.increment();
  counter.increment();
  console.log(counter.value());  // 2.
  
  counter.decrement();
  console.log(counter.value());  // 1.
  }
  