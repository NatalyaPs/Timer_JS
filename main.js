// элементы, куда будем выводить - поля
const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const millisecondElement = document.querySelector('.millisecond')

// кнопки
const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')

// слушатели
startBtn.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

pauseBtn.addEventListener('click', () => {
    clearInterval(interval)
})

stopBtn.addEventListener('click', () => {
    clearInterval(interval)
    cleareFields ()
})

// переменные
let hour = 0,
    minute = 0,
    second = 0,
    millisecond = 0,
    interval


function startTimer() {
    // мсек
    millisecond++
    if(millisecond < 9) {
        millisecondElement.innerText = '0' + millisecond
    }
    if(millisecond > 9) {
        millisecondElement.innerText = millisecond
    }
    if(millisecond > 99) {
        second++
        secondElement.innerText = '0' + second
        millisecond = 0
        millisecondElement.innerText = '0' + millisecond
    }

    // сек
    if(second < 9) {
        secondElement.innerText = '0' + second
    }
    if(second > 9) {
        secondElement.innerText = second
    }
    if(second > 59) {
        minute++
        minuteElement.innerText = '0' + minute
        second = 0
        secondElement.innerText = '0' + second
    }

    // мин
    if(minute < 9) {
        minuteElement.innerText = '0' + minute
    }
    if(minute > 9) {
        minuteElement.innerText = minute
    }
    if(minute > 59) {
        hour++
        hourElement.innerText = '0' + hour
        minute = 0
        minuteElement.innerText = '0' + minute
    }

    // час
    if(hour < 9) {
        hourElement.innerText = '0' + hour
    }
    if(hour > 9) {
        hourElement.innerText = hour
    }
    if(hour > 23) {
        hour = 0
        hourElement.innerText = '0' + hour
    }
}

// функция для очистки полей при нажатии кнопки Stop
function cleareFields () {
    hour = 0
    minute = 0
    second = 0
    millisecond = 0
    hourElement.textContent = '00'
    minuteElement.textContent = '00'
    secondElement.textContent = '00'
    millisecondElement.textContent = '00'
}