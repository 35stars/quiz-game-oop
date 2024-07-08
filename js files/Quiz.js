
import  * as main  from "./main.js";
import questions  from "./questions.js";
import * as evaluation from "./evaluation.js";
import myAnswers from "./myAnswers.js";

export default class Quiz {

    index
    score
    result

    constructor(){
        
        this.index = 0
        this.score = 0
        
        this.showQtn(questions)

        main.restartBtn.onclick=()=>this.restart()
        
        this.reload()
        
    }
    
    reload(){
        if(document.location.reload) this.restart()
    }

    showQtn(arr){

        const data = arr.map(opt=>{
            return `
            <article id="question">
                <h2 id="title">${opt.question}</h2>
                <p class="option">
                    <span id="a"> &nbsp ${opt.a}</span>
                </p>
                <p class="option">
                    <span id="b"> &nbsp ${opt.b}</span>
                </p>
                <p class="option">
                    <span id="c"> &nbsp ${opt.c}</span>
                </p>
                <p class="option">
                    <span id="d"> &nbsp ${opt.d}</span>
                </p>
            </article>
            `
        }) 
        main.optionsDiv.innerHTML = data[this.index]
        main.optionsDiv.querySelectorAll('.option').forEach(option=>{
            option.addEventListener('click',(e)=>this.event(e) )
        })
       
        main.innerScore.textContent = ` ${this.score}`
    }


    event(e){  

        myAnswers.push(e.target.textContent)
        
        if(e.target.textContent.match(questions[this.index].answer)){
            this.correct()
            this.nextQuestion()
        } 
        else this.wrong()

        
    }    
    
    nextQuestion(){
        ++this.index
        if(this.index < questions.length){ 
            this.showQtn(questions)
        } 
        else if(this.score == questions.length-1) evaluation.perfect()
        else if(this.score > 2) evaluation.passed()
        else {
            if(this.score > 2) evaluation.passed()
            else evaluation.failed()
        }
    }

    showAnswers(){   
        main.optionsDiv.innerHTML = ''
        main.restartBtn.style.display = 'block'

        for(let value of myAnswers){
            main.myAnswers.innerHTML += `<li>${value}</li>`
        }
        
        for(let index of questions){
            main.correctAnswers.innerHTML += 
            `<li style="color:black">${index.answer}</li>`
        }

        for(let li of main.myAnswers.children){
            for(let index of questions){
                if(li.textContent.match(index.answer)){
                    li.style.color='blue'
                } 
                else li.classList.add('incorrect')
            }
        }
        main.answersDiv.style.visibility = this.index == questions.length ? 'visible' : 'hidden'
    }

    restart(){
        myAnswers.length = 0
        new Audio('sound efx/interface-1-126517.mp3').play()
        
        this.index = 0
        this.score = 0

        main.innerResult.textContent = ''

        main.myAnswers.innerHTML = ''
        main.correctAnswers.innerHTML = ''

        main.restartBtn.style.display = 'none'
        
        this.showQtn(questions)  
    }

    correct(){
        main.innerScore.textContent = ` ${++this.score}`

        new Audio('sound efx/good-6081.mp3').play()

        this.result = this.score == questions.length
        ? 'PERFECT' : this.score > 2
        ? 'PASSED' : 'FAILED' 

        setTimeout(() => {
            main.parEl.textContent = ''
        }, 900, main.parEl.textContent = 'Correct')    
    }

    wrong(){

        this.nextQuestion()
    
        new Audio('sound efx/error-2-36058.mp3').play()
    
        setTimeout(() => {
            main.parEl.textContent = ''
        }, 900, main.parEl.textContent = 'Incorrect')
    }

}
