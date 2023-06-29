let logBtn = document.getElementById("log-btn")

let data = [
  {
      player: "Jane",
      score: 52
  }, 
  {
      player: "Mark",
      score: 41
  }
]

logBtn.addEventListener("click", function() {
  console.log(data[0].score)
})