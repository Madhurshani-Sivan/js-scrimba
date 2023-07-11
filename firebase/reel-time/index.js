import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const inputFieldEl = document.getElementById("input-field")
const addBtnEl = document.getElementById("add-btn")

const appSettings = {
  databaseURL: "https://playground-cbc8d-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const moviesInDB = ref(database, "movies")

addBtnEl.addEventListener("click", function() {
  let inputValue = inputFieldEl.value
  push(moviesInDB, inputValue)
  console.log(`${inputValue} added to database`)
})



