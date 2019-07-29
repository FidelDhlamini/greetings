var Greetings = function (names) {
    let storedNames = names || {};

    function greetMe(name, language) {

        if (!name) {
            return "What's your name? Enter your name";
        }
        if (!language) {
            return "Select a language";
        }
        name = name.replace(/\s/g, '')
        name = name.replace(/[0-9]/g, '');
        name = name.toLowerCase();
        name = name.charAt(0).toUpperCase() + name.slice(1);

        if (storedNames[name] === undefined) {
            storedNames[name] = 0;
        }

        if (language === "English") {

            return "Hello, " + name;
        }
        if (language === "Xhosa") {

            return "Molo, " + name;
        } else if (language === "Afrikaans") {

            return "Hallo, " + name;
        }

    }

    function convertToLowerCase() {
        return name.convertToLowerCase();
    }

    function totalNumberOfNamesGreeted() {

        return Object.keys(storedNames).length
    }

    function getNames() {
        console.log(storedNames)
        return storedNames;
    }

    return {
        greet: greetMe,
        nameList: getNames,
        numberOfGreetedNames: totalNumberOfNamesGreeted,
        lowerCase: convertToLowerCase,

    }

}