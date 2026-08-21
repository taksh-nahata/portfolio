const { neon } = require('@neondatabase/serverless');

module.exports = async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Health check if you open the URL in your browser
    if (req.method === 'GET') {
        return res.status(200).json({ status: 'API is online and ready for POST requests!' });
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed. Use POST.' });
    }

    let body = req.body;
    if (typeof body === 'string') {
        try {
            body = JSON.parse(body);
        } catch (e) {
            return res.status(400).json({ error: 'Invalid JSON body.' });
        }
    }

    const { name, email, subject, message } = body || {};

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields (name, email, subject, message) are required.' });
    }

    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
        console.error('DATABASE_URL environment variable is missing in Vercel settings!');
        return res.status(500).json({ error: 'DATABASE_URL environment variable is not configured in Vercel settings.' });
    }

    try {
        const sql = neon(dbUrl);

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

        const result = await sql`
            INSERT INTO messages (name, email, subject, message)
            VALUES (${name}, ${email}, ${subject}, ${message})
            RETURNING id
        `;

        return res.status(200).json({ success: true, id: result[0].id });
    } catch (error) {
        console.error('Neon database error:', error);
        return res.status(500).json({ error: error.message || 'Database submission failed.' });
    }
};