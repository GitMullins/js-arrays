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
        domString += `<p>${dinos[i].name}</p>`;
        domString += `</div>`
    }
    printToDom('dino-barn', domString);
}

const assignments = [
    {
        title: 'product cards',
        dueDate: '03/05/2019',
        topic: 'HTML/CSS',
        notes: 'Use flexbox',
        assignmentUrl: 'www.google.com',
    },
    {
        title: 'test assignment1',
        dueDate: '03/05/2019',
        topic: 'HTML/CSS',
        notes: 'Use flexbox',
        assignmentUrl: 'www.google.com',
    },
    {
        title: 'test assignment3',
        dueDate: '03/05/2019',
        topic: 'HTML/CSS',
        notes: 'Use flexbox',
        assignmentUrl: 'www.google.com',
    },
    {
        title: 'test assignment4',
        dueDate: '03/05/2019',
        topic: 'HTML/CSS',
        notes: 'Use flexbox',
        assignmentUrl: 'www.google.com',
    },
    {
        title: 'test assignment5',
        dueDate: '03/05/2019',
        topic: 'HTML/CSS',
        notes: 'Use flexbox',
        assignmentUrl: 'www.google.com',
    },
]

const buildAssignmentCards = () => {
    let message = '';
    for(let i=0; i<assignments.length; i++){
        message += `<div class='cards'>`;
        message += `<h3>${assignments[i].title}</h3>`;
        message += `<h1>Due Date: ${assignments[i].dueDate}</h1>`;
        message += `<p>Get the assignment: ${assignments[i].assignmentUrl}<p>`;
        message += `<p>Topic: ${assignments[i].topic}</p>`;
        message += `<p>Notes: ${assignments[i].notes}</p>`;
        message += `</div>`
    }
    printToDom('assignment-cards', message);
}

//total of 5 assignments
//buildAssignmentCards - loop over assignments and make a domString
//reuse printToDom() to display the domString







const init = () => {
    buildAssignmentCards();
}

init();