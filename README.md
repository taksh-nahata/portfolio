# Taksh's Terminal Portfolio (Termifolio)

**Playable Demo Link:** [https://takshnahata.vercel.app/](https://takshnahata.vercel.app/)

## What is this?
This is an interactive, terminal-based personal portfolio website built entirely from scratch using HTML, CSS, and Vanilla JavaScript. Visitors are greeted by a custom 3D CSS animation before dropping into a hybrid command-line interface. You can navigate the site, run commands, and even send me a direct message through a custom Serverless Neon Postgres backend.

## Why did I make it?
Most personal portfolios are boring templates built on heavy frameworks, and I wanted to build something that actually felt like *me*. I wanted a portfolio that felt like an operating system—where someone visiting my site actually has to interact with a terminal to learn about my background, rather than just endlessly scrolling through a standard page. It was also a massive challenge to build a custom command parser from scratch in Vanilla JS without relying on React or external terminal libraries.

## How to use it (Live)
1. Visit the deployed link above!
2. You will see an intro animation. Scroll down until you hit the terminal.
3. Click the terminal input and type `help` to see a list of commands.
4. Type `about` to navigate to my background page.
5. Type `contact` to visit the database-backed messaging form.

## How to run it locally (Setup Instructions)
If you want to clone this and run it yourself:
1. Clone the repository: `git clone https://github.com/taksh-nahata/portfolio.git`
2. Since there is a backend component for the contact form, you need to install the dependencies. Run `npm install`.
3. To run the frontend locally, you can use any live server extension or python server (`python -m http.server 8000`).
4. To test the backend API locally, you'll need the Vercel CLI. Run `vercel dev`.
5. Open your browser to `http://localhost:3000` (or whatever port Vercel assigns).

## Project Structure
* `index.html`, `style.css`, `script.js` - The core frontend interface, 3D intro, and terminal logic.
* `/about/` - My biography page, photos, and scrolling animations.
* `/contact/` - The direct messaging form.
* `/api/contact.js` - Vercel Serverless Function that securely pushes form submissions into my Neon database.

## Screenshots
*(Hey Taksh! Replace this line with a screenshot or GIF of your site in action! Drop an image file into your repo and link it here like `![Demo](screenshot.png)`)*