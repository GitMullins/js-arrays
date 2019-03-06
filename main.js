const dinos = [
    {
        dinoType: 't-rex'
    },
    {
        dinoType: 'alligator'
    },
    {
        dinoType: 'wannabe t-rex'
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
        domString += `<h3>${dinos[i].dinoType}</h3>`
        console.log(dinos[i].dinoType);   
    }
    printToDom('dino-barn', domString);
}

const init = () => {
    buildDinos();
}

init();