function moveSecondHand (){
    var now = new Date();
    var sec = now.getSeconds();
    var secDegree = (sec * 6 - 90);
    // Dealing with the glitch effect when sec is changing from 59 to 0
    if(sec == 0){
        // Removing the transition effect
        document.querySelector(".second-hand").classList.add("no-effect");
        setTimeout(function(){
            // Adding the transition effect
            document.querySelector(".second-hand").classList.remove("no-effect");    
        }, 10);
    }
    document.querySelector(".second-hand").style.transform = `rotate(${secDegree}deg)`;
    console.log(sec + " , " + secDegree);
}

// Move second hand every 1 second
setInterval(moveSecondHand,1000);
