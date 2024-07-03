const btn = document.getElementById('btnFetchCharactes');
const div = document.getElementById('characters');

btn.addEventListener('click', () => {
    console.log('Escuchando');

    fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json)
        .then((data) => renderCharacters(data.results));
});

function renderCharacters(character){
    character.forEach(ch => {
        div.innerHTML += `<img src="${ch.image}"></img>`;
    });
}