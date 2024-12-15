import http from "http"

const server = http.createServer((req, res)=> {
    res.end(JSON.stringify({massage: "Esakkiraj"}))
})
const port =8000;

server.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})