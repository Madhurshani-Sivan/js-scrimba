const container = document.getElementById("container")

const imgs = [
  "hip1.jpg",
  "hip2.jpg",
  "hip3.jpg"
]

function renderImages(arr) {
  let imgsDom = ""
  for(let i = 0; i < arr.length; i++) {
    imgsDom += `<img alt="Employee in the company" class="team-img" src="${arr[i]}">`
  }
  container.innerHTML = imgsDom
}

renderImages(imgs)