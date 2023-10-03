var timer=60;
var scoreVal=0;
var randnum=0;

function Increasescore(){
    scoreVal += 10;
    document.querySelector("#score").textContent = scoreVal;
}


function getNewhit(){
    randnum = Math.floor(Math.random()*10); 
    document.querySelector("#hitval").textContent = randnum;
   }

function makeBubble(){
    var clutter = "";

    for(var i = 1; i<=128; i++){
        var res = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${res} </div>`; 
    }
    document.querySelector("#pbtm").innerHTML=clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if (timer>0){
            timer--;
            document.querySelector('#timer').textContent = timer;
        }
       else{
        document.querySelector("#pbtm").innerHTML = "<h1>GAME OVER </h1>";
        clearInterval(timerint);
       }
    }, 1000);
    
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
     var clickednum = Number(dets.target.textContent);
     if (clickednum === randnum){
        Increasescore();
        makeBubble();
        getNewhit();
     }    
})

runTimer();
makeBubble();
getNewhit();