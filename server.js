const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 80;

const products = [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },      
    { id: 3, name: "Producto 3", price: 300 },
];

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end("Archivo no encontrado");
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
});

server.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});