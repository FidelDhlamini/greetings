var userInput = document.querySelector(".nameInput");
var greetBtn = document.querySelector(".greetButton");
var display = document.querySelector(".greetingMessage");
var radio = document.querySelector(".whichLanguage");
var counter = document.querySelector(".nameCounter");

//if (localStorage["namesOfGreeted"]){
//   var name = JSON.parse(localStorage["namesOfGreeted"])
//}
// var names = localStorage.getItem('namesOfGreeted');
var instance = Greetings(name); 


function greetMe() {
    // var bag = {
    //     'Mike ': 0,
    //     'IViwe': 0,
    // };
    // localStorage.setItem('testKey', JSON.stringify(bag));
    //var newBag = localStorage.getItem('testKey');
    //var newerBag = JSON.parse(newBag);
    //console.log(newerBag['Mike ']);
    
    if (radio) {
        var language = document.querySelector("input[name='languageName']:checked");
        var greetingDisplay = instance.greet(userInput.value, language.value)
    }
    localStorage["namesOfGreeted"] = JSON.stringify(instance.numberOfGreetedNames())
    display.innerHTML = greetingDisplay;
    counter.innerHTML = instance.numberOfGreetedNames();





}





greetBtn.addEventListener('click', greetMe);