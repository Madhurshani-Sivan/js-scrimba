import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const inputFieldEl = document.getElementById("input-field")
const addBtnEl = document.getElementById("add-btn")
const shoppingListEl = document.getElementById("shopping-list")

const appSettings = {
  databaseURL: "https://playground-cbc8d-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")


onValue(shoppingListInDB, function(snapshot) {
  let itemsArray = Object.entries(snapshot.val())
  clearShoppingListEl()

  for(let i = 0; i < itemsArray.length; i++) {
    let currentItem = itemsArray[i]
    let currentItemID = currentItem[0]
    let currentItemValue = currentItem[1]
    appendItemToShoppingListEl(currentItem)
  }
})

addBtnEl.addEventListener("click", function() {
  let inputValue = inputFieldEl.value
  push(shoppingListInDB, inputValue)
  clearInputFieldEl()
  appendItemToShoppingListEl(inputValue)
})

function clearInputFieldEl() {
  inputFieldEl.value = ""
}

function appendItemToShoppingListEl(item) {
  let itemID = item[0]
  let itemValue = item[1]
  let newEl = document.createElement("li")
  newEl.textContent = itemValue
  shoppingListEl.append(newEl)
}

function clearShoppingListEl() {
  shoppingListEl.innerHTML = ""
}