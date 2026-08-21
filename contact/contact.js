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

// Copy to clipboard functionality
function copyToClipboard(text, btnElement) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btnElement.textContent;
        btnElement.textContent = "Copied!";
        btnElement.style.backgroundColor = "#27c93f";
        btnElement.style.color = "#ffffff";
        btnElement.style.borderColor = "#27c93f";

        setTimeout(() => {
            btnElement.textContent = originalText;
            btnElement.style.backgroundColor = "";
            btnElement.style.color = "";
            btnElement.style.borderColor = "";
        }, 2000);
    }).catch(e => {
        console.error("Failed to copy text: ", e);
    });
}

// Processing contact form submission
const API_URL = (window.location.protocol === 'file: ' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') ? 'http://localhost:3000/api/contact' : '/api/contact';
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const submitButton = document.getElementById("formSubmitButton");

if (contactForm) {
    contactForm.addEventListener("submit", async (e) =>{
        e.preventDefault();

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