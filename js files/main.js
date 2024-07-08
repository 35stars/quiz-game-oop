import Quiz from "../js files/Quiz.js";

export const container = document.querySelector(".container");

export const optionsDiv = document.getElementById("options-div");

export const innerScore = document.querySelector("#score");
export const innerResult = document.querySelector("#eval");

export const resultDiv = document.getElementById("score-and-result-div");

export let parEl = document.getElementById("answer");

export let correctAnswers = document.getElementById("show-answers");

export let myAnswers = document.getElementById("your-answers");

export let answersDiv = document.getElementById("answers-div");

export let restartBtn = document.getElementById("restartBtn");

export let quiz = new Quiz();

