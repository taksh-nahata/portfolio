require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { neon } = require('@neondatabase/serverless');

const myApp = express();
const PORT = process.env.PORT || 3000;

myApp.use(cors());
myApp.use(express.json());

const sql = neon(process.env.DATABASE_URL);

async function initDB() {
    try {
        await sql`
        CREATE TABLE IF NOT EXISTS messages (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            subject TEXT NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;
    console.log('Connected to Neon PostgreSQL database');
    } catch (error) {
        console.error('Connection error:', error);
    }
}
initDB();

myApp.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            error: 'All fields (name, email, subject, message) are required.'
        });
    }

    try {
        const result = await sql`
            INSERT INTO messages (name, email, subject, message)
            VALUES (${name}, ${email}, ${subject}, ${message})
            RETURNING id
        `;
        
        const newId = result[0].id;
        console.log(`[Neon DB] New message inserted with ID: ${newId} from ${name} (${email})`);

        return res.status(201).json({
            success: true,
            message: `I got your message! I will get back to you as soon as possible. If I dont respond within 48 hours, please feel free to reach out to me again or directly email me using my given email.`,
            id: newId
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
        return res.status(500).json({
            success: false,
            error: "Mb. Couldn't retrieve your messages"
        });
    }
});

app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`Contact page backend is running on port http://localhost:${PORT}`);
    console.log(`SQLite DB is active at portfolio.db`);
    console.log(`=========================================`);
});
