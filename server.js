const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get('/', (req, res) => {
        return app.render(req, res, '/', req.query)
    })

        .get('/film/:id', (req, res) => {
            return app.render(req, res, '/film', req.query)
        })

        .get('/search/:search', (req, res) => {
            return app.render(req, res, '/', req.query)
        })

        .get('*', (req, res) => {
            return handle(req, res)
        })

        .listen(port, err => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        });
});
