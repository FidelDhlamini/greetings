var userInput = document.querySelector(".nameInput");
var greetBtn = document.querySelector(".greetButton");
var display = document.querySelector(".greetingMessage");
var radio = document.querySelector(".whichLanguage");
var instance = Greetings();



function greetMe() {

    
    var enter = instance.greet(userInput.value);
    display.innerHTML = enter;

}





greetBtn.addEventListener('click', greetMe);