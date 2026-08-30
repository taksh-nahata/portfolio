const { neon } = require('@neondatabase/serverless');

// serverless function that vercel uses to handle the contact form submissions
module.exports = async function handler(req, res) {
    // sets up cors so my frontend can actually hit this endpoint
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // handles preflight stuff
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // quick health check so i dont get random 500 errors if i visit this link directly
    if (req.method === 'GET') {
        return res.status(200).json({ status: 'API is online! Ready to catch some POST requests.' });
    }

    // block anything that isnt a post request
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Hold up, method not allowed. Please use POST.' });
    }

    let body = req.body;
    // vercel is weird and sometimes passes the body as a string
    if (typeof body === 'string') {
        try {
            body = JSON.parse(body);
        } catch (e) {
            return res.status(400).json({ error: 'Looks like you sent some invalid JSON.' });
        }
    }

    const { name, email, subject, message } = body || {};

    // make sure they actually filled out the form before we waste db time
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'Missing some fields! Make sure to fill out everything.' });
    }

    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
        console.error('forgot to set DATABASE_URL in vercel settings lmao');
        return res.status(500).json({ error: 'Server configuration error.' });
    }

    try {
        // start neon connection
        const sql = neon(dbUrl);

        // checks if table exists and creates it if not
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

        // insert the message into the neon db
        const result = await sql`
            INSERT INTO messages (name, email, subject, message)
            VALUES (${name}, ${email}, ${subject}, ${message})
            RETURNING id
        `;

        return res.status(200).json({ success: true, id: result[0].id });
    } catch (error) {
        console.error('Yikes, Neon database connection dropped:', error);
        return res.status(500).json({ error: error.message || "Couldn't connect to the database right now." });
    }
};