import express from 'express';
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(8000, 'localhost', () => {
    console.log(`Server running at localhost:8000`);
});