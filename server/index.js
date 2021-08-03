  
const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const pdfTemplate = require('./documents/index');
const pdfDocument = require('./documents/avnant')
const pdfAnnexes = require('./documents/annexes')
const pdfbdcpbe = require('./documents/pbe')

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.post('/pdf', (req, res) => {
    pdf.create(pdfDocument(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
             res.send(Promise.reject());
        }

         res.send(Promise.resolve());
    });
});

app.post('/annexes', (req, res) => {
    pdf.create(pdfAnnexes(req.body), {orientation: 'landscape',format: 'A3'}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});
app.post('/bdcpbe', (req, res) => {
    pdf.create(pdfbdcpbe(req.body), {format: 'A2'}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

app.listen(port, () => console.log(`Listening on port ${port}`));