// ╔═╗╔═╗╔╗╔╔╦╗╔═╗╔═╗╔╦╗  ╔═╗╔═╗╔═╗╔═╗  ╔═╗╔╗╔╦╔╦╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
// ║  ║ ║║║║ ║ ╠═╣║   ║   ╠═╝╠═╣║ ╦║╣   ╠═╣║║║║║║║╠═╣ ║ ║║ ║║║║╚═╗
// ╚═╝╚═╝╝╚╝ ╩ ╩ ╩╚═╝ ╩   ╩  ╩ ╩╚═╝╚═╝  ╩ ╩╝╚╝╩╩ ╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

// SCRIPT FOR ANIMATING THE PHRASE "CONTACT ME"
const contactText = "CONTACT ME"

const contactHeaderElement = document.getElementById("contactHeader");
const contactWords = contactText.split(' ');

const contactHTML = contactWords.map((word, wordIndex) => {
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
contactHeaderElement.innerHTML = contactHTML;