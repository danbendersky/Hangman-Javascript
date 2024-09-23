// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

const words = ["python", "java", "swift", "javascript"]
let winCount = 0
let lossCount = 0
console.log("H A N G M A N")

gameLoop: while (true) {
    let action = ""
    menu: while (true) {
        console.log('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:"')
        let action = input()
        if (action === "results"){
            console.log("You won: " + winCount + " times")
            console.log("You lost: " + lossCount + " times")
        } else if (action === "play"){
            break menu;
        } else if (action === "exit"){
            break gameLoop
        }
    }
    let realWord = words[Math.trunc(Math.random() * words.length)]
    let shownWord = ("-".repeat(realWord.length))
    let guessCount = 0
    let guessedWords = ""
    while (true) {
        console.log("\n" + shownWord)
        console.log("Input a letter: ")
        let wordGuess = input()

        if (wordGuess.length !== 1) {
            console.log("Please, input a single letter")
        } else if (!"abcdefghijklmnopqrstuvwxyz".includes(wordGuess)) {
            console.log("Please, enter a lowercase letter from the English alphabet")
        } else if (shownWord.includes(wordGuess) || guessedWords.includes(wordGuess)) {
            console.log("You've already guessed this letter.")
        } else if (realWord.includes(wordGuess)) {
            guessedWords = guessedWords + (wordGuess)
            for (let i = 0; i < shownWord.length; i++) {
                if (realWord.substring(i, i + 1) === wordGuess) {
                    shownWord = shownWord.substring(0, i) + wordGuess + shownWord.substring(i + 1)
                }
            }
        } else {
            console.log("That letter doesn't appear in the word.")
            guessedWords = guessedWords + (wordGuess)
            guessCount++
        }

//    console.log("guessCount = " + guessCount)
        if (shownWord.localeCompare(realWord) === 0) {
            console.log("You guessed the word " + shownWord + "!")
            console.log("You survived!")
            winCount ++
            break;
        }
        if (guessCount === 8) {
            console.log("You lost!")
            lossCount ++
            break;
        }
    }

}


