let person = {
  name: "Madhurshani",
  age: 25,
  country: "Sri Lanka"
}
function logData() {
  console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}
logData()

let age = 75
if(age < 6) {
  console.log("free")
} else if(age < 18) {
  console.log("child discount")
} else if(age < 27) {
  console.log("student discount")
} else if(age < 67) {
  console.log("full price")
} else {
  console.log("senior citizen discount")
}

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
for(let i = 0; i < largeCountries.length; i++) {
  console.log(largeCountries[i])
}

largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]
largeCountries.pop()
largeCountries.push("Pakistan")
largeCountries.shift()
largeCountries.unshift("China")
console.log(largeCountries)

let dayOfMonth = 13
let weekday = "Tuesday"
if(dayOfMonth === 13 && weekday === "Friday"){
  console.log("😱")
}

let hands = ["rock", "paper", "scissor"]
function getHand() {
  console.log(hands[Math.floor(Math.random() * 3)])
}
getHand()