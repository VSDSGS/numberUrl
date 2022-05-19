const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.end("Please enter the number in url");
});

app.get(`/:id`, (req, res) => {
    const id = parseInt(req.params.id);
    if (typeof (id / 2) === Number) {
        const idArray = new Array();
        for (let i = 0; i < id; i++) {
            idArray.push(i + 1);
        }
        res.json(idArray);
    } else {
        const str = "Something went wrong!";
        res.json("Something went wrong");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
