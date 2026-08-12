const express = require('express');
const cors = require('cors');
const myDatabase = require('better-sqlite3');
const path = require('path');

const myApp = express();
const PORT = process.env.PORT || 3000;

myApp.use(cors());
myApp.use(express.json());

const db = new myDatabase(path.join(__dirname, 'portfolio.db'));
db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

myApp.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            error: 'All fields (name, email, subject, message) are required.'
        });
    }

    try {
        const stmt = db.prepare(`
            INSERT INTO messages (name, email, subject, message)
            VALUES (?, ?, ?, ?)
        `);
        const result = stmt.run(name, email, subject, message);

        console.log(`[DB] New message inserted with ID: ${result.lastInsertRowid} from ${name} (${email})`);

        return res.status(201).json({
            success: true,
            message: `I got your message! I will get back to you as soon as possible. If I dont respond within 48 hours, please feel free to reach out to me again or directly email me using my given email.`,
            id: result.lastInsertRowid
        });
    } catch (error) {
        console.error(`[DB] ERROR`, error);
        return res.status(500).json({ 
            success: false,
            error: 'DATABASE STORAGE HAS FAILED.'
        });
    }
});

app.get('/api/messages', (req, res) => {
    try {
        const rows = db.prepare('SELECT * FROM messages ORDER BY created_at DESC').all();
        return res.json({ 
            success: true,
            count: rows.length,
            messages: rows 
        });
    } catch (error) {
        return. res.status(500).json({
            success: false,
            error: "Mb. Couldn't retrieve your messages"
        });
    }
});

app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`Contact page backend is running on port http://localhost:${PORT}`);
    console.log(``)
