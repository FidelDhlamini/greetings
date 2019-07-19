var userInput = document.querySelector(".nameInput");
var greetBtn = document.querySelector(".greetButton");
var display = document.querySelector(".greetingMessage");
var radio = document.querySelector(".whichLanguage");
var counter = document.querySelector(".nameCounter");
var instance = Greetings();



function greetMe() {

    if (radio) {
        var language = document.querySelector("input[name='languageName']:checked");
        var greetingDisplay = instance.greet(userInput.value, language.value)
        //   console.log(language.value)
        //   console.log(userInput.value)
        //        display = greetingDisplay.innerHTML;
        //   console.log(display);

    }
    display.innerHTML = greetingDisplay;
    counter.innerHTML = instance.countNames();



}





greetBtn.addEventListener('click', greetMe);