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

//Function to create smash words for each card header
function createSmashPhrase(elementId, phrase, startOffset=5) {
    const container = document.getElementById(elementId);
    if (!container) return;
    const words = phrase.split(' ');
    container.innerHTML = words.map((word, index) => {
        const startPercent = startOffset + (index * 5);
        const endPercent = startPercent + 5;
        return `<span class="smash-word" style="animation-range: ${startPercent}% ${endPercent}%;">${word}</span>`;
    }).join(' ');
}

createSmashPhrase("emailHeaderPhrase", "MY EMAIL IS", 2);
createSmashPhrase("githubHeaderPhrase", "MY GITHUB IS", 25);
createSmashPhrase("linkedinHeaderPhrase", "MY LINKEDIN IS", 50);
createSmashPhrase("instaHeaderPhrase", "MY INSTAGRAM IS", 75);

// copy to clipboard so people dont have to highlight text
function copyToClipboard(text, btnElement) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btnElement.textContent;
        // turn the button green to show it worked
        btnElement.textContent = "Copied!";
        btnElement.style.backgroundColor = "#27c93f";
        btnElement.style.color = "#ffffff";
        btnElement.style.borderColor = "#27c93f";

        // reset it back to normal after 2 seconds
        setTimeout(() => {
            btnElement.textContent = originalText;
            btnElement.style.backgroundColor = "";
            btnElement.style.color = "";
            btnElement.style.borderColor = "";
        }, 2000);
    }).catch(e => {
        console.error("bruh failed to copy text: ", e);
    });
}

// connecting my frontend form directly to neon serverless api
const API_URL = (window.location.protocol === 'file:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') ? 'http://localhost:3000/api/contact' : '/api/contact';
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const submitButton = document.getElementById("formSubmitButton");

if (contactForm) {
    contactForm.addEventListener("submit", async (e) =>{
        e.preventDefault(); // stop page reload

        // grab all the input values
        const name = document.getElementById("formName").value.trim();
        const email = document.getElementById("formEmail").value.trim();
        const subject = document.getElementById("formSubject").value.trim();
        const message = document.getElementById("formMessage").value.trim();

        submitButton.disabled = true;
        submitButton.textContent = "Saving to database...";
        formStatus.style.color = "#00f0ff";
        formStatus.innerText = "Connecting to backend database...";

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, subject, message })
            });
            
            const data = await response.json();

            if (data.success) {
                formStatus.style.color = "#27c93f";
                formStatus.innerText = `Great! Your message has been saved successfully at ID: ${data.id}`;
                contactForm.reset();
            } else {
                formStatus.style.color = "#ff4c4c";
                formStatus.innerText = `Error: ${data.error}`;
            }
        } catch (error) {
            console.error("Fetch error:", error);
            formStatus.style.color = "#ff4c4c";
            formStatus.innerText = "Couldn't connect to server";
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = "Send Message";
        }
    });
}

// SCRIPT FOR HANDLING TERMINAL COMMANDS AND BUTTONS
const terminalInput = document.getElementById("terminal-input");
const terminalBody = document.getElementById("terminal-body");
const routes = {
    home: "../index.html",
    about: "../about/about.html",
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
        - <span class="text-accent">home</span> - Return to the main page<br>
        - <span class="text-accent">about</span> - Learn who I truly am<br>
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