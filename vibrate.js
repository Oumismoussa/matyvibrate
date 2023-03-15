
let vibrateS = document.querySelector('.button1')
let vibrateP = document.querySelector('.button2')

function vibrateP(ms){
    navigator.vibrate(ms);
}

function vibrateP(){
    console.log('coucou')
    navigator.vibrate([300,100,300,100,300]);
})
