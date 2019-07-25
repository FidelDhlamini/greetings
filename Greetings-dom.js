var userInput = document.querySelector(".nameInput");
var greetBtn = document.querySelector(".greetButton");
var display = document.querySelector(".greetingMessage");
var radio = document.querySelector(".whichLanguage");
var counter = document.querySelector(".nameCounter");
var clear = document.querySelector(".resetButton");

if (localStorage["names"]) {
    var nameA = JSON.parse(localStorage.getItem("names"));
}
console.log(nameA)
var instance = Greetings(nameA);

instance.numberOfGreetedNames()
counter.innerHTML = instance.numberOfGreetedNames();

function greetMe() {


    if (radio) {
        var language = document.querySelector("input[name='languageName']:checked");
        var greetingDisplay = instance.greet(userInput.value, language.value)
    }
    localStorage.setItem('names', JSON.stringify(instance.nameList()));


    display.innerHTML = greetingDisplay;
    counter.innerHTML = instance.numberOfGreetedNames();





}

function clearData() {

    localStorage.clear();
    


}





greetBtn.addEventListener('click', greetMe);
clear.addEventListener('click', clearData);