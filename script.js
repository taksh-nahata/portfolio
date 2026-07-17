// ╦ ╦╔═╗╔╦╗╔═╗  ╔═╗╔═╗╔═╗╔═╗  ╔═╗╔╗╔╦╔╦╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
// ╠═╣║ ║║║║║╣   ╠═╝╠═╣║ ╦║╣   ╠═╣║║║║║║║╠═╣ ║ ║║ ║║║║╚═╗
// ╩ ╩╚═╝╩ ╩╚═╝  ╩  ╩ ╩╚═╝╚═╝  ╩ ╩╝╚╝╩╩ ╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝


// SCRIPT FOR ANIMATING THE NAME "TAKSH NAHATA"
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


//  SCRIPT FOR ANIMATING THE PHRASE "LEMME SHOW YOU WHAT I GOT"
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


// SCRIPT FOR PLAYING INTRO AUDIO AND HANDLING SCROLL FADE OUT
const introAudio = new Audio('intro.mp3');
introAudio.volume = 0.5;

function playIntroAudio() {
    introAudio.play().then(() => {
        console.log('Intro audio started playing.');
    }).catch((error) => {
        console.error('Error playing intro audio:', error);
        document.addEventListener('click', unlockAudio);
        document.addEventListener('keydown', unlockAudio);
        document.addEventListener('touchstart', unlockAudio);
        window.addEventListener('scroll', unlockAudio);
    });
}

function unlockAudio() {
    introAudio.play().then(() => {
        console.log('Intro audio unlocked and started playing.');
        document.removeEventListener('click', unlockAudio);
        document.removeEventListener('keydown', unlockAudio);
        document.removeEventListener('touchstart', unlockAudio);
        window.removeEventListener('scroll', unlockAudio);
    });
}

let isFading = false;
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    if (scrollPercent >= 90 && !introAudio.paused && !isFading) {
        isFading = true;
        const startVolume = introAudio.volume;
        const fadeDuration = 1000;
        const intervalTime = 50;
        const steps = fadeDuration / intervalTime;
        let currentStep = 0;
        
        const fadeInterval = setInterval(() => {
            currentStep++;
            introAudio.volume = Math.max(0, startVolume * (1 - currentStep / steps));
            introAudio.pause();

            if (currentStep >= steps) {
                clearInterval(fadeInterval);
                introAudio.pause();
                introAudio.volume = startVolume;
                isFading = false;
            }
        }, intervalTime);
    }
});

window.addEventListener('DOMContentLoaded', playIntroAudio);

// SCRIPT FOR HANDLING TERMINAL COMMANDS AND BUTTONS
const terminalInput = document.getElementById("terminal-input");
const terminalBody = document.getElementById("terminal-body");
const routes = {
    about: "about/about.html",
    projects: "projects.html",
    skills: "skills.html",
    contact: "contact.html"
};

terminalInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const inputVal = terminalInput.value.trim().toLowerCase();
        runCommand(inputVal);
        terminalInput.value = "";
    }
});

function runCommand(commandText) {
    if (!commandText) return;

    const commandLog = document.createElement("div");
    commandLog.innerHTML = `<span class="prompt">>guest@taksh-nahata:~$&nbsp;</span>${commandText}`;
    terminalBody.appendChild(commandLog);
    const statusLog = document.createElement("div");
    statusLog.style.paddingLeft = "15px";

    if (commandText === "clear") {
        terminalBody.innerHTML = "";
        return;
    }

    if (routes[commandText]) {
        statusLog.innerHTML = `
            <span class="text-cyan">Executing secure handshake...</span><br>
            <span class="text-cyan">Access granted. Launching environmental matrix...</span>
            <span class="text-cyan">[ REDIRECTING TO /${commandText} ]</span>
        `;
        terminalBody.appendChild(statusLog);
        terminalBody.scrollTop = terminalBody.scrollHeight;

        setTimeout(() => {
            window.location.href = routes[commandText];
        }, 900);
    } else if (commandText === "help") {
        statusLog.innerHTML = `Available launch routes:<br>
        - <span class="text-accent">about</span> - Learn who I truly am<br>
        - <span class="text-accent">projects</span> - See my current builds and ventures, as well as what I'm working on right now!<br>
        - <span class="text-accent">skills</span> - Output my technical stack & systems architecture<br>
        - <span class="text-accent">contact</span> - Get in touch with me<br>
        - <span class="text-accent">clear</span> - Clear the terminal<br>`;
        terminalBody.appendChild(statusLog);
    } else {
        statusLog.innerHTML = `command not found: <span class="text-accent">${commandText}</span>. Type <span class="text-accent">help</span> for a list of available commands.`;
        terminalBody.appendChild(statusLog);
    }

    terminalBody.scrollTop = terminalBody.scrollHeight;
}

const statusElement = document.getElementById("terminal-status");

function showTip(tipText) {
    statusElement.textContent = `> ${tipText}`;
    statusElement.style.color = "#00f0ff";
    statusElement.style.textShadow = "0 0 10px rgba(0, 240, 255, 0.4)";
}

function hideTip() {
    statusElement.textContent = "The terminal is ready. Hover over a command to view details...";
    statusElement.style.color = "#666";
    statusElement.style.textShadow = "none";
}
