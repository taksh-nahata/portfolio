const myName = "TAKSH NAHATA"

const logoElement = document.getElementById("logo");
const words = myName.split(' ');

const totalHTML = words.map((word, wordIndex) => {
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
logoElement.innerHTML = totalHTML;

const fullPhrase = "LEMME SHOW YOU WHAT I GOT";
const stageContainer = document.getElementById("phrase-stage");
const phraseWords = fullPhrase.split(' ');

const phraseHTML = phraseWords.map((word, index) => {
    let startPercent, endPercent;
    
    if (index === 0) {
        // "LEMME" smashes in first (20% to 28% scroll)
        startPercent = 20;
        endPercent = 28;
    } else {
        // The rest of the words smash in sequentially AFTER the 90deg turn (starting at 40%)
        startPercent = 40 + ((index - 1) * 6);
        endPercent = startPercent + 6;
    }
    
    return `<span class="smash-word" style="animation-range: ${startPercent}% ${endPercent}%;">${word}</span>`;
}).join(' ');

stageContainer.innerHTML = phraseHTML;