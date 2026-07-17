// ╔═╗┌┐ ┌─┐┬ ┬┌┬┐  ╔═╗┌─┐┌─┐┌─┐  ╔═╗┌┐┌┬┌┬┐┌─┐┌┬┐┬┌─┐┌┐┌┌─┐
// ╠═╣├┴┐│ ││ │ │   ╠═╝├─┤│ ┬├┤   ╠═╣│││││││├─┤ │ ││ ││││└─┐
// ╩ ╩└─┘└─┘└─┘ ┴   ╩  ┴ ┴└─┘└─┘  ╩ ╩┘└┘┴┴ ┴┴ ┴ ┴ ┴└─┘┘└┘└─┘

// SCRIPT FOR ANIMATING THE PHRASE "ABOUT TAKSH NAHATA"
const aboutText = "ABOUT TAKSH NAHATA"

const aboutHeaderElement = document.getElementById("aboutHeader");
const aboutWords = aboutText.split(' ');

const aboutHTML = aboutWords.map((word, wordIndex) => {
    const wordDelay = wordIndex * 1.1;
    const letters = word.split('');
    
    const letterHTML = letters.map((letter, letterIndex) => {
        const initialDelay = 0.5;
        const letterDelay = letterIndex * 0.18;
        const totalDelay = initialDelay + wordDelay + letterDelay;
        return `<span class="letter" style="animation-delay: ${totalDelay}s">${letter}</span>`;
    }).join('');

    return `<div class="word" style="animation-delay: ${wordDelay}s">${letterHTML}</div>`;
}).join('');
aboutHeaderElement.innerHTML = aboutHTML;

// SCRIPT FOR ANIMATING THE PHRASE "SO... YOU REALLY WANT TO KNOW WHO I AM?"
const firstPhrase = "SO... YOU REALLY WANT TO KNOW WHO I AM?";
const secondPhrase = "I MEAN, I GUESS..."
const stageContainer = document.getElementById("phrase-stage-about");
const stageContainerGuess = document.getElementById("phrase-stage-guess");
const firstPhraseWords = firstPhrase.split(' ');
const secondPhraseWords = secondPhrase.split(' ');

const firstPhraseHTML = firstPhraseWords.map((word, index) => {
    let startPercent, endPercent;
    
    if (index === 0) {
        // "SO..." smashes in first (20% to 28% scroll)
        startPercent = 15;
        endPercent = 20;
    } else {
        // The rest of the words smash in sequentially
        startPercent = 20 + ((index - 1) * 4);
        endPercent = startPercent + 4;
    }
    
    return `<span class="smash-word" style="animation-range: ${startPercent}% ${endPercent}%;">${word}</span>`;
}).join(' ');

stageContainer.innerHTML = firstPhraseHTML;

const secondPhraseHTML = secondPhraseWords.map((word, index) => {
    const startPercent = 56 + (index * 5);
    const endPercent = startPercent + 5;

    return `<span class="smash-word" style="animation-range: ${startPercent}% ${endPercent}%;">${word}</span>`;
}).join(' ');

stageContainerGuess.innerHTML = secondPhraseHTML;