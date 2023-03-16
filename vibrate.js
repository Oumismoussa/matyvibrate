let paragraphe = document.querySelector('.paragraphe')

if (navigator.vibrate){
    paragraphe.innerText = 'Ca marche'
} else{
    paragraphe.innerText = 'Ca ne marche pas'
}

function vibrate(ms){
    navigator.vibrate(ms);
}

function startVibrate(){ 
navigator.vibrate([300,100,300,100])
}
;
