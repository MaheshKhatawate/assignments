//  use this quizData in your app.
const quizData = [{
    "question": "Which language runs in a web browser?",
    "1": "Java",
    "2": "C",
    "3": "Python",
    "4": "JavaScript",
    "correct": "d",
},
{
    "question": "What does CSS stand for?",
    "1": "Central Style Sheets",
    "2": "Cascading Style Sheets",
    "3": "Cascading Simple Sheets",
    "4": "Cars SUVs Sailboats",
    "correct": "b",
},
{
    "question": "What does HTML stand for?",
    "1": "Hypertext Markup Language",
    "2": "Hypertext Markdown Language",
    "3": "Hyperloop Machine Language",
    "4": "Helicopters Terminals Motorboats Lamborginis",
    "correct": "a",
},
{
    "question": "What year was JavaScript launched?",
    "1": "1996",
    "2": "1995",
    "3": "1994",
    "4": "none of the above",
    "correct": "b",
},
// you can add more quiz here
]

function createComponent(question){
    const button = document.createElement('button')
    const h1 = document.createElement('h1')
    const options = document.createElement('div')

    for(let i=0;i<4;i++){
        const label = document.createElement('label')

        const input = document.createElement('input')
        input.type = 'radio'
        input.name = question.question
        input.value = i+1

        label.appendChild(input)
        label.appendChild(document.createTextNode(`${question[i+1]}`))

        options.appendChild(label)
        options.appendChild(document.createElement('br'))
    }

    h1.innerHTML = question.question
    button.innerHTML = 'Submit'

    const mainDiv = document.createElement('div')
    mainDiv.appendChild(h1)
    mainDiv.appendChild(options)
    mainDiv.appendChild(button)

    return mainDiv
}

const body = document.querySelector('body')
quizData.forEach((question)=>{
    const q = createComponent(question)
    body.appendChild(q)
})