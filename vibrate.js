
let vibrateS = document.querySelector('.button1')
let vibrateP = document.querySelector('.button2')

function vibrate(ms){
    navigator.vibrate(ms);
}

vibrateP.addEventListener('click',function vibratePattern(){
    console.log('coucou')
    navigator.vibrate([300,100,300,100,300]);
})
