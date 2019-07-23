var Greetings = function (names) {
    let counter = 0;
    let storedNames = names || {};
    let final;

    function greetMe(name, language) {

        if (name) {
            if (storedNames[name] === undefined) {
                storedNames[name] = 0;
            }
        }

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

    function totalNumberOfNamesGreeted() {
        return Object.keys(storedNames).length
    }

    function getNames() {
        return storedNames;
    }

    function getCount() {
        return counter;
    }

    return {
        greet: greetMe,
        countNames: getCount,
        nameList: getNames,
        numberOfGreetedNames: totalNumberOfNamesGreeted,
    }

}