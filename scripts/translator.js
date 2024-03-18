import * as language from "/scripts/language.js";

const englishTextInput = document.getElementById("english-input");
const benequeText = document.getElementById("beneque-text");

englishTextInput.addEventListener("input", function() {
    benequeText.innerHTML = translate(englishTextInput.value);
});

const stripPunc = function(string) {
    return string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
}

const translate = function(sentence) {
    if (sentence == "") {
        return "<i>Translated text will show up here.</i>";
    }
    let benequeTranslation = "";
    const punctuation = '!"'.concat("#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
    for (let i = 0; i < sentence.split(" ").length; i++) {
        let stringToAdd = "";

        try {
            stringToAdd = language.englishBenequeDictionary[stripPunc(sentence.split(" ")[i].toLowerCase())].concat(" ");
        } catch(error) {
            stringToAdd = sentence.split(" ")[i].toLowerCase().concat(" ");
        }

        try {
            if (punctuation.includes(sentence.split(" ")[i][sentence.split(" ")[i].length - 1])) {
                stringToAdd = stripPunc(stringToAdd).replaceAll(" ", "");
                stringToAdd = stringToAdd.concat(sentence.split(" ")[i][sentence.split(" ")[i].length - 1], " ");
            }

            if (punctuation.includes(sentence.split(" ")[i][0])) {
                stringToAdd = sentence.split(" ")[i][0].concat(stringToAdd);
            }
        } catch(error) {
            // pass
        }

        if (sentence.split(" ")[i] == sentence.split(" ")[i][0].toUpperCase() + sentence.split(" ")[i].slice(1, sentence.split(" ")[i].length)) {
            stringToAdd = stringToAdd[0].toUpperCase() + stringToAdd.slice(1, stringToAdd.length);
        }
        
        if ((sentence.split(" ")[i] == sentence.split(" ")[i].toUpperCase()) && sentence.split(" ")[i].length != 1) {
            stringToAdd = stringToAdd.toUpperCase();
        }

        benequeTranslation = benequeTranslation.concat(stringToAdd);
    }

    benequeTranslation = benequeTranslation.trim();
    return benequeTranslation;
}