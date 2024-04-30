



function DiceGame() {
    let RandomNumber1 =(Math.random()*6)+1
    let RandomNumber2 =(Math.random()*6)+1

    let player1 = parseInt(RandomNumber1);
    let player2 = parseInt(RandomNumber2);


    // console.log(player1);
    //console.log(player2);

    document.querySelector(".img1").src = `images/dice-${player1}` + ".png";
    document.querySelector(".img2").src = `images/dice-${player2}` + ".png";
    

    document.colour("result").innerHTML="if player one wins let the colour change";
    
    if(player1 > player2){
    document.getElementById("result").innerHTML = "PLAYER 1 WIN";
    }
    else if(player2 > player1){  
    document.getElementById("result").innerHTML = "PLAYER 2 WIN";

    }else{
        document.getElementById("result").innerHTML = "PLAYER DRAW";
    }


   //for(i=1; i<5; i++);
   //let newdiv= document.createElement;
   //document.body.appendChild('new div');

   //if(player 1 > player2){
    //document.getElementById("result").innerHTML ="let the colour change"
    }
   .//document.querySelector("colour").innerHTML=if player one wins let the colour  change;

