let num1 = Math.ceil(Math.random() * 10)
let num2 = Math.ceil(Math.random() * 10)

let ques = document.getElementById("question")
let form1 = document.getElementById("form")
let input1 = document.getElementById("input")

let score1 = document.getElementById("score")
// let score = 0
let score = JSON.parse(localStorage.getItem("score"))

if (!score) {
    score = 0;
}
score1.innerText = `score: ${score}`

ques.innerText = `what is ${num1} multiply by ${num2}?`

const correct = num1 * num2

form1.addEventListener("submit", () => {
    let userAns = +input1.value;
    if (userAns === correct) {
        score++
        updateLocalStorage()


    }
    else {
        score--;

        updateLocalStorage()
    }
})
function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}










