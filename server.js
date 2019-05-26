const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get('/', (req, res) => app.render(req, res, '/', req.query))

        .get('/film/:id', (req, res) => app.render(req, res, '/film', { id: req.params.id }))

        .get('/search/:search', (req, res) => app.render(req, res, '/', { search: req.params.search }))

        .get('*', (req, res) => handle(req, res))

        .listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });
});
