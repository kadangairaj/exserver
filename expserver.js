import express from "express";

const server = express();

server.get("/", (req, res ) => {
    res.send("<h1>welcome</h1>");
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)  // eslint-disable-line no-console
})