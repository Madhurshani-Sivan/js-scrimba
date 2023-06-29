const totalPrice = 420.69235632455
const purchaseBtn = document.getElementById("purchase-btn")
purchaseBtn.textContent = `Purchase €${ totalPrice.toFixed(2) }`

const totalPriceStr = "420.69235632455"
const buyBtn = document.getElementById("buy-btn")
buyBtn.textContent = `Buy €${ Number(totalPriceStr).toFixed(2) }`