const takeCare = document.getElementById('nonstop')
takeCare.textContent = ">sup, rome?"

const passionFruit = document.createElement('span')
passionFruit.textContent = "_"
takeCare.append(passionFruit)
setInterval(() => passionFruit.classList.toggle('hotline-bling'), 1000)
