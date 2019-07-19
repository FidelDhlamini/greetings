var Greetings = function () {
    let counter = 0;
    let names = {};
    let final;

    function greetMe(name, language) {

        ///names = name;
        // console.log(language);
        if (language === "English") {
            counter++;
            console.log("Hello, " + name)
            return "Hello, " + name;
        }
        if (language === "Xhosa") {
            counter++;
            return "Molo, " + name;
        } else if (language === "Afrikaans") {
            counter++;
            return "Hallo, " + name;
        }

    }

    function nameContainer() {
        return names;

    }

    function getCount() {
        return counter;
    }

    return {
        greet: greetMe,
        countNames: getCount
    }

}