import express from 'express';
import bodyParser from 'body-parser';
import MongoClient from 'mongodb';

const app = express();

app.use(bodyParser.json());

app.get('/api/spending/:month', async (req, res) => {
    try{
        const month = req.params.month;
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('perfin');
        const spending = await db.collection('spending').find({})
        res.status(200).json(bills);
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }
})

app.get('/hello', (req, res) => res.send('Hello'));
app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}!!`));

app.listen(8000, () => console.log('Listening on port 8000'));