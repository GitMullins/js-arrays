const dinos = [
    {
        dinoType: 't-rex',
        name: 'Ed',
    },
    {
        dinoType: 'alligator',
        name: 'Edd',
    },
    {
        dinoType: 'wannabe t-rex',
        name: 'Eddy'
    }
];

//loop over dinos
//build up a domstring
//print domstring to the dom

const printToDom = (divId, print)=>{
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = print;
}

const buildDinos = () => {
    let domString ='';
    for (let i=0; i < dinos.length; i++){
        domString += `<div class="dinosaur">`;
        domString += `<h3>${dinos[i].dinoType}</h3>`;
        domString += `<p>${dinos[i].name}</p>`
        domString += `</div>`
    }
    printToDom('dino-barn', domString);
}

const init = () => {
    buildDinos();
}

init();