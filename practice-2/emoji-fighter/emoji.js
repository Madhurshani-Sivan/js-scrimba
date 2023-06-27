let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
  let firstEmoji = fighters[Math.floor(Math.random() * fighters.length)]
  let secondEmoji = fighters[Math.floor(Math.random() * fighters.length)]
  stageEl.textContent = firstEmoji + " vs " + secondEmoji
})