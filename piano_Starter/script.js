const whiteButtons = document.querySelectorAll('.whiteButton');
const blackButtons = document.querySelectorAll('.blackButton');

// white buttons
const noteC4 = document.querySelector('#noteC4');
const noteD4 = document.querySelector('#noteD4');
const noteE4 = document.querySelector('#noteE4');
const noteF4 = document.querySelector('#noteF4');
const noteG4 = document.querySelector('#noteG4');
const noteA4 = document.querySelector('#noteA4');
const noteB4 = document.querySelector('#noteB4');
const noteC5 = document.querySelector('#noteC5');
const noteD5 = document.querySelector('#noteD5');
const noteE5 = document.querySelector('#noteE5');


// black buttons
const noteDb4 = document.querySelector('#noteDb4');
const noteEb4 = document.querySelector('#noteEb4');
const noteGb4 = document.querySelector('#noteGb4');
const noteAb4 = document.querySelector('#noteAb4');
const noteBb4 = document.querySelector('#noteBb4');
const noteDb5 = document.querySelector('#noteDb5');
const noteEb5 = document.querySelector('#noteEb5');

document.addEventListener('keydown', function(e){
    whiteButtons.forEach(function(el){
        if(e.keyCode === 90){
            if(el.id === 'c4'){
                el.classList.add('bg-gray-300');
                noteC4.play();
            }
        } else if (e.keyCode === 88){
            if(el.id === 'd4'){
                el.classList.add('bg-gray-300');
                noteD4.play();
            }
        } else if (e.keyCode === 67){
            if(el.id === 'e4'){
                el.classList.add('bg-gray-300')
            }
        } else if (e.keyCode === 86){
            if(el.id === 'f4'){
                el.classList.add('bg-gray-300')
            }
        } else if (e.keyCode === 66){
            if(el.id === 'g4'){
                el.classList.add('bg-gray-300')
            }
        } else if (e.keyCode === 78){
            if(el.id === 'a4'){
                el.classList.add('bg-gray-300')
            }
        } else if (e.keyCode === 77){
            if(el.id === 'b4'){
                el.classList.add('bg-gray-300')
            }
        } else if (e.keyCode === 188){
            if(el.id === 'c5'){
                el.classList.add('bg-gray-300')
            }
        } else if (e.keyCode === 190){
            if(el.id === 'd5'){
                el.classList.add('bg-gray-300')
            }
        } else if (e.keyCode === 191){
            if(el.id === 'e5'){
                el.classList.add('bg-gray-300')
            }
        }
    });

    blackButtons.forEach(function(el){
        if(e.keyCode === 83){
            if(el.id === 'db4'){
                el.classList.add('bg-gray-300');
            }
        } else if (e.keyCode === 68){
            if(el.id === 'eb4'){
                el.classList.add('bg-gray-300')
            }
        } else if (e.keyCode === 71){
            if(el.id === 'gb4'){
                el.classList.add('bg-gray-300')
            }
        } else if (e.keyCode === 72){
            if(el.id === 'ab4'){
                el.classList.add('bg-gray-300')
            }
        } else if (e.keyCode === 74){
            if(el.id === 'bb4'){
                el.classList.add('bg-gray-300')
            }
        } else if (e.keyCode === 76){
            if(el.id === 'db5'){
                el.classList.add('bg-gray-300')
            }
        } else if (e.keyCode === 186){
            if(el.id === 'eb5'){
                el.classList.add('bg-gray-300')
            }
        } 
    })
    console.log(e.keyCode)
});

document.addEventListener('keyup', function(e){
    whiteButtons.forEach(function(el){
        el.classList.remove('bg-gray-300');
    });
    blackButtons.forEach(function(el){
        el.classList.remove('bg-gray-300');
    });
});

function stopAudio(audio){
    audio.pause();
    audio.currentTime = 0;
}