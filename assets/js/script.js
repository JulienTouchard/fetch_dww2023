// fetch appelle une source exterieur ou interireur
fetch("./data/menuEntries.json")
    // il recupere la reponse et la transforme soit en texte soit en json
    .then(res => res.text())
    .then(text => console.log(text))

// fetch est une fonction asynchrone
fetch("./data/menuEntries.json")
    // cette fois au format json
    .then(res => res.json())
    .then(json =>{
        // en dehors de la derriere callback le parametre de cette dernière
        // n'est pas utilisable
        let menu = json;
        console.dir(menu);
    })
//console.dir(menu);// ne fonctionnera pas car synchrone