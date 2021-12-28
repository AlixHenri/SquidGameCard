const container = document.querySelector(".container")
const card = document.querySelector(".card")
const back = document.querySelector(".back")

card.addEventListener("click", (e) =>{
    card.style.transition = 'all 0.4s ease'
    back.style.transition = 'all 0.4s ease'
    card.style.transform = 'rotateY(180deg)'
    back.style.transform = 'rotateY(180deg)'
    back.style.zIndex = '2'
})

back.addEventListener("click", (e) => {
    card.style.transform = 'rotateY(0deg)'
    back.style.transform = 'rotateY(0deg)'
    back.style.zIndex = '-1'
})