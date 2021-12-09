const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:1234@cluster0.mmooq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var uuid = require('uuid');

client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log('err', err)
    // perform actions on the collection object
    client.close();
});

app.use(cors())
app.use(express.json());

app.post('/', async (req, res) => {
    const joke = req.body;
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('mydb').collection('joke').insertOne({
        id: uuid.v4(),
        value: joke.value,
        like: 0,
        dislike: 0
    });

    await client.close();
    res.status(200).send({
        "status": "ok",
        "message": "Joke with ID = " + uuid.v4() + " is created",
        "joke": joke
    });
})

app.post('/:id/like', async (req, res) => {
    const id = req.params.id;
    const client = new MongoClient(uri);
    await client.connect();
    const joke = await client.db('mydb').collection('joke').findOne({ "id": id })
    let new_joke = { ...joke, like: ++joke.like }
    await client.db('mydb').collection('joke').updateOne({ 'id': id }, {
        "$set": new_joke
    });

    await client.close();
    res.status(200).send({
        "status": "ok",
        "message": "Joke with ID = " + uuid.v4() + " is like",
        "joke": new_joke
    });
})

app.post('/:id/dislike', async (req, res) => {
    const id = req.params.id;
    const client = new MongoClient(uri);
    await client.connect();
    const joke = await client.db('mydb').collection('joke').findOne({ "id": id })
    let new_joke = { ...joke, dislike: ++joke.dislike }
    await client.db('mydb').collection('joke').updateOne({ 'id': id }, {
        "$set": new_joke
    });

    await client.close();
    res.status(200).send({
        "status": "ok",
        "message": "Joke with ID = " + uuid.v4() + " is like",
        "joke": new_joke
    });
})

app.get('/', async (req, res) => {
    const client = new MongoClient(uri);
    await client.connect();
    const joke = await client.db('mydb').collection('joke').find({}).toArray();
    await client.close();
    res.status(200).send(joke);
})

app.get('/:id', async (req, res) => {
    const id = req.params.id;
    const client = new MongoClient(uri);
    await client.connect();
    const joke = await client.db('mydb').collection('joke').findOne({ "id": id })
    await client.close();
    res.status(200).send({
        "status": "ok",
        "joke": joke
    });
})

app.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const client = new MongoClient(uri);
    await client.connect();
    await client.db('mydb').collection('joke').deleteOne({ 'id': id });
    await client.close();
    res.status(200).send({
        "status": "ok",
        "message": "Joke with ID = " + id + " is deleted"
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})