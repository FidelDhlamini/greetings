var Greetings = function (names) {
    let storedNames = names || {};

    function greetMe(name, language) {

        //if (name) {
            name = name.replace(/\s/g, '')
            name = name.replace(/[0-9]/g, '');
            console.log(name, 'greetMe');
            
        if (name === "") {
            return "Hallo, " + name.split(" ");
        }
         if (name === "89") {
             return "Hallo, " + name.split(" ");
         }
        if (storedNames[name] === undefined) {
            storedNames[name] = 0;
        }

        if (language === "English") {
            // counter++;
            return "Hello, " + name;
        }
        if (language === "Xhosa") {
            //  counter++;
            return "Molo, " + name;
        } else if (language === "Afrikaans") {
            //   counter++;
            return "Hallo, " + name;
        }

    }

    function totalNumberOfNamesGreeted() {
        //console.log("test")
        return Object.keys(storedNames).length
    }

    function getNames() {
        console.log(storedNames)
        return storedNames;
    }



    // function getCount() {
    //     return counter;
    // }

    return {
        greet: greetMe,
        // countNames: getCount,
        nameList: getNames,
        numberOfGreetedNames: totalNumberOfNamesGreeted,

    }

}