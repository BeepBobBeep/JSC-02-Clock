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
    // 20% to make second hand centre of rotation at 20% and 80% ratio
    document.querySelector(".second-hand").style.transform = `translate(-20%,-50%) rotate(${secDegree}deg)`;
    
    var min = now.getMinutes();
    var minDegree = (min * 6 + sec/10 - 90);
    // Dealing with the glitch effect when sec is changing from 59 to 0
    if(sec == 0){
        // Removing the transition effect
        document.querySelector(".minute-hand").classList.add("no-effect");
        setTimeout(function(){
            // Adding the transition effect
            document.querySelector(".minute-hand").classList.remove("no-effect");    
        }, 0);
    }
    document.querySelector(".minute-hand").style.transform = `rotate(${minDegree}deg)`;

    var hr = now.getHours();
    var hrDegree = (hr * 30 + min/2 - 90);
    // Dealing with the glitch effect when sec is changing from 59 to 0
    if(hr == 0 || hr == 12){
        // Removing the transition effect
        document.querySelector(".hour-hand").classList.add("no-effect");
        setTimeout(function(){
            // Adding the transition effect
            document.querySelector(".hour-hand").classList.remove("no-effect");    
        }, 10);
    }
    document.querySelector(".hour-hand").style.transform = `rotate(${hrDegree}deg)`;
}

// Updating hands every 1 second
// setInterval(moveSecondHand,1000);
