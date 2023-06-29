const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false
points += 100
hasWon = true
if (hasWon) {
  console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
  console.log(`The winner is ${opponent}! ${player} lost the game`)
}

let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]
function logItems(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}
logItems(myCourses)

localStorage.setItem("myItem", "29")
console.log(localStorage.getItem("myItem"))

function generateSentence(desc, arr) {
  let str = `The ${arr.length} ${desc} are `
  for(let i = 0; i < arr.length; i++) {
    if(i === arr.length - 1) {
      str += arr[i]
    } else {
      str += arr[i] + ", "
    }
  }
  return str
}
const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
console.log(sentence)