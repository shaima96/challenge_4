

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/./public'))
app.use(express.json())



app.get("/app", (req, res) => {
    res.sendFile(__dirname + '/./client/dist/')
})



let port = 4001;

app.listen(port, () => {
    console.log(`listening to port 4001`);
});