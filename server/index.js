const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


const { getCompliment, getFortune, getRandomNumber, getComplimentForDog } = require('./controller')


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/random-number", getRandomNumber);
app.delete("/api/random-number", (req, res) => { 
    res.status(204).end(); 
});
app.get("/api/dog-compliment", getComplimentForDog);


app.listen(4000, () => console.log("Server running on 4000"));
