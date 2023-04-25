var highScores = JSON.parse(localStorage.getItem("highScores"))
var highscoresContainer = document.getElementById("highscores-container")

if (highScores === null){
    highscoresContainer.textContent = "No highscores"
} else {
    highscoresContainer.textContent= ""

    for (var i = 0; i < highScores.length; i++) {
        var para = document.createElement("p")
        para.textContent = "Initials: " + highScores[i].initials +"---- Score: " + highScores[i].score

        highscoresContainer.append(para)
    }
}