let sum=(function(){
    function add(a,b){
        return a+b;
    }
    function subtract(a,b){
        return a-b;
    }
    return{ 
        add:add,
        subtract:subtract
    }
})();

