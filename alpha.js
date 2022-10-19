/***************************************************************
|======================DEFINING VARIABLES======================|
|    ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇   |
****************************************************************/
const button = document.querySelectorAll("td>button:not(#newGameBtn)");
const displayScreen = document.querySelector(".screen")
const gameStatus = document.querySelector(".gameStatus")
const newGameBtn = document.querySelector("#newGameBtn")
let userGuess = 0;

let randomPick = (Math.floor(Math.random() * 26)) + 65  
console.log(randomPick)

let randomLetter = (String.fromCharCode(randomPick));
console.log(randomLetter);




/***************************************************************
|======================FUNCTION FOR GAME SOUNDS================|
|    ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇   |
****************************************************************/

function winSound (){

    // let winAudio = document.querySelector(".win") 
   
    const winAudio = new Audio("./Music/win.mp3")
    winAudio.currentTime = 0.05
    winAudio.play()
}


function errorSound (){
    const errorAudio = new Audio ("./Music/error.mp3")
    errorAudio.currentTime = 0.05
    errorAudio.play()
}

function gameOverSound (){
    const gameAudio = new Audio ("./Music/gameover.mp3")
    gameAudio.currentTime =0.15
    gameAudio.play()
}

/***************************************************************
|======================THE GAME LOGIC =========================|
|    ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇   |
****************************************************************/
button.forEach(currentBtn => {  

    currentBtn.addEventListener("click", function () {
      
        if(userGuess < 5){

            if (currentBtn.innerText === randomLetter){

                displayScreen.innerHTML=`✔✔✔CORRECT <span class="gameStatus">Start new game</span>`
                currentBtn.style.opacity = ".5"
                winSound()
                newGameBtn.style.display="block"
                userGuess = 6;

                
                
            }

            else{

                displayScreen.innerText="TRY AGAIN"
                currentBtn.style.opacity = ".5"
                errorSound()

            }

            userGuess++
            console.log(userGuess)

        } 
        
        else{
            
            displayScreen.innerHTML=`GAME OVER <span class="gameStatus">Start new game</span>`
            newGameBtn.style.display="block"
            gameOverSound()

        }


    })

})


/***************************************************************
|==================ON CLICKING THE NEW GAME BUTTON==============|
|    ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇   |
****************************************************************/

newGameBtn.addEventListener("click", function () {

    displayScreen.innerHTML=`   ---------------- `
    userGuess = 0
    randomPick = (Math.floor(Math.random() * 26)) + 65  ;
    randomLetter = (String.fromCharCode(randomPick));
    console.log(randomLetter)
    btnOpacity()
    newGameBtn.style.display="none"


    
    

})


function btnOpacity () {

    button.forEach(currentBtnOpacity =>{
        currentBtnOpacity.style.opacity="1"
    })
}




/***************************************************************
|======================GRATITUDE===============================|
|    🙌🏾🙌🏾🙌🏾🙌🏾🙌🏾🙌🏾🙌🏾🙌🏾🙌🏾🙌🏾🙌🏾🙌🏾 🙏🏾🙏🏾🙏🏾🙏🏾🙏🏾 🙏🏾🙏🏾🙏🏾🙏🏾🙏🏾
****************************************************************/
/****************************************************************
All praise to the One who deserves praise whether He is
being praised or not.
As Sir Isaac Newton put it, if I have been able to see further it is 
by standing on the shoulders of giants.
In that regards,my undiluted gratitude to:
🟫THE BIGGEST BOSS (MR ABISOYE)
🟫BOSS TOBI
🟫GRAND DEV AZ
🟫GRAND DEV SEUN
🟫ALFA MUBARAK
**************************************************************/

