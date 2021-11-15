const left = document.querySelector('.left')
const right = document.querySelector('.right')
const up = document.querySelector('.up-button')
const down = document.querySelector('.down-button')
const slideLength = right.querySelectorAll('div').length

left.style.transform = `translateY(-${(slideLength - 1)*100}vh)`
let activeSlideIndex = 0

up.addEventListener('click',()=> changeSlide('up'))
down.addEventListener('click',()=> changeSlide('down'))

const changeSlide = (direction) => {
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slideLength - 1){
            activeSlideIndex = 0
        }
    }else if(direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slideLength - 1
        }
    }

    right.style.transform = `translateY(-${activeSlideIndex*100}vh)`
    left.style.transform = `translateY(${(activeSlideIndex - slideLength + 1)*100}vh)`
}