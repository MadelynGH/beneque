import * as language from "/scripts/language.js";

const dictionaryTable = document.getElementById("dictionary-table");

for (let i = 0; i < Object.keys(language.englishBenequeDictionary).length; i++) {
    let tr = document.createElement("tr");
    let tdEnglish = document.createElement("td");
    let tdBeneque = document.createElement("td");

    tdEnglish.innerHTML = Object.keys(language.englishBenequeDictionary)[i];
    tdBeneque.innerHTML = language.englishBenequeDictionary[Object.keys(language.englishBenequeDictionary)[i]];

    dictionaryTable.appendChild(tr);
    tr.appendChild(tdEnglish);
    tr.appendChild(tdBeneque);
}