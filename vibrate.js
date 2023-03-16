let paragraphe = document.querySelector('.paragraphe')

if (navigator.vibrate){
    paragraphe.innerText = 'Ca marche'
} else{
    paragraphe.innerText = 'Ca ne marche pas'
}

let vibrateS = document.querySelector('.button1')
let vibrateP = document.querySelector('.button2')

function vibrate(ms){
    navigator.vibrate(ms);
}

vibrateP.addEventListener('click',function startVibrate(){ 
navigator.vibrate([300,100,300,100])}
);
