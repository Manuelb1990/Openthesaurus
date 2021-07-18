async function getSynonyms() {



    if (document.getElementById('inputfield').value == '') {
        alert('Eingabe Feld ist leer!')
    } else {

        let input = document.getElementById('inputfield').value;

        let url = `https://www.openthesaurus.de/synonyme/search?q=${input}&format=application/json`;
        let response = await fetch(url);
        let responseAsJson = await response.json();
        console.log('response is', responseAsJson);
        let synsets = responseAsJson['synsets'];
        console.log(synsets[0]['terms']);
        loadOutputContainer(synsets);
    }
}

function loadOutputContainer(inputs) {
    let outputContainer = document.getElementById('output-container');

    /*outputContainer.innerHTML = '';*/
    outputContainer.innerHTML = `<div>Es wurden <b>${inputs.length}</b> Synoym-Sets geladen </div>`;

    for (let i = 0; i < inputs.length; i++) {
        let output = inputs[i];
        let terms = output['terms'];
        outputContainer.innerHTML += `<h2>Synonym-Set mit ID${output['id']}</h2>`;

        for (let j = 0; j < terms.length; j++) {
            let term = terms[j];
            outputContainer.innerHTML += `<div>${term['term']}</div>`;
        }
    }

}