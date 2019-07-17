var Greetings = function () {
    let names = 0;
    function greetMe(name) {
        return "Hello " + name;
    }
    console.log(greetMe("Fidel"));
    function counter(name){
       name += names;
        return names
    }
    
    return {
        greet: greetMe,
    }
}