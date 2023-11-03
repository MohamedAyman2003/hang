//  letters 
const letters = "abcdefghijklmnopqrstuvwxyz"
// get array from letters
let lettersArray = Array.from( letters )
// select letters container 
let lettersContainer = document.querySelector(".letters")


lettersArray.forEach( letter => {
    let span = document.createElement( "span" )
    
    let spanText = document.createTextNode( letter )
    span.className = "letter-box"
    span.appendChild( spanText );
    lettersContainer.appendChild(span)
})

const words = {
    people: ["mohamed" , "passant" , "mai" , "Marilyn Monroe" , "Nelson Mandela","Abraham Lincoln" , "Albert Einstein" , "Thomas Edison"],
    programing: ["php","javascript","python","cplusplus" , "java" , "dart" , "csharp"],
    country: ["egypt" ,"emirates" , "saudi arabia" , "sudan" , "america" , "england" , "canada" , "spain" , "southafrica"],
    movies:["The Godfather" , "The Shawshank Redemption" , "Raging Bull" , "Casablanca" , "Citizen Kane" , "Vertigo" , "Chinatown" , "Ben-Hur" ,"Amadeus" , "Gladiator"]
}
let myKeys = Object.keys(words)
let randomKeys = Math.floor(Math.random() * myKeys.length)
let randomName = myKeys[randomKeys]

let randomPropValue = words[randomName]
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length)
let randomValueValue = randomPropValue[randomValueNumber]

document.querySelector(".game-info .category span").innerHTML = randomName
// console.log(myKeys)
// console.log(randomKeys)
// console.log(randomName)
// console.log(randomPropValue)
// console.log(randomValueNumber)
// console.log(randomValueValue)
// console.log()

let lettersGuessContainer = document.querySelector(".letters-guess")

let lettersAndSpace = Array.from( randomValueValue )

 lettersAndSpace.forEach( letter => {
     let emptySpan = document.createElement( "span" )
     if ( letter === " " ) {
         emptySpan.className = "with-space"
     }
     lettersGuessContainer.appendChild(emptySpan)
} )

let guessSpan = document.querySelectorAll(".letters-guess span")
let wordWrong = 0;
let myDraw = document.querySelector(".hangman-draw")
document.addEventListener( "click", ( e ) => {
    if ( e.target.className === 'letter-box' ) {
         let theStatus = false;
        e.target.classList.add( "clicked" )
        let theClickedLetter = e.target.innerHTML.toLowerCase()
        let theChosenWord = Array.from(randomValueValue.toLowerCase())
        theChosenWord.forEach( ( wordLetter, wordIndex ) => {
            if ( theClickedLetter == wordLetter ) {
            
                theStatus = true; 
            //    console.log(`the index of letter is ${wordIndex}`)
                guessSpan.forEach( ( span, spanIndex ) => {
                    if ( wordIndex === spanIndex ) {
                        span.innerHTML = theClickedLetter
                    }
                })
          }
        } )
        if ( theStatus !== true ) {
            wordWrong++
            myDraw.classList.add( `draw-${ wordWrong }` )
            document.getElementById( "fail" ).play()
            if ( wordWrong === 8 ) {
                endgame()
                lettersContainer.classList.add( "finished" );
                
            }
        } else {
            document.getElementById( "success" ).play()
        }
    }
})
function endgame() {
    let div = document.createElement( "div" )
    let divtext = document.createTextNode( `game over , the word is ${ randomValueValue }` )
    div.appendChild( divtext )
    div.className = "popup"
    document.body.appendChild( div )
    
}




















































































