var timer = 60;
var score = 0;
var hitrn = 0;

function increasrScore(){
    score += 10;
    document.querySelector("#scoreval") .textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
    var clutter = "";


    for(var i = 0; i<=132; i++) {
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`;

    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if (timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
        
    },1000);
}

document.querySelector("#pbtm")
.addEventListener("click" , function (dets) {
    // console.log(dets)
    var clickednum = Number(dets.target.textContent);
    
    console.log(clickednum)
    if (clickednum === hitrn){
        increasrScore();
        makeBubble();
        getNewHit();
    }
});
// increasrScore();
getNewHit();
runTimer();
makeBubble();