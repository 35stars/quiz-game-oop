import * as main  from "../js files/main.js";


function perfect(){
    new Audio('../sound efx/winfantasia-6912.mp3').play()
    main.quiz.showAnswers()
    main.innerResult.textContent = ` ${main.quiz.result}`
}

function passed(){
    new Audio('../sound efx/winfantasia-6912.mp3').play()
    main.quiz.showAnswers()
    main.innerResult.textContent = ` ${main.quiz.result}!`
}

function failed(){
    main.quiz.showAnswers()
    main.innerResult.textContent = ` ${main.quiz.result}`
}

export {perfect, passed, failed}
