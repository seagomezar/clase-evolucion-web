const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3002;

const products = [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },      
    { id: 3, name: "Producto 3", price: 300 },
];

const server = http.createServer((req, res) => {
    if (req.url === "/products" && req.method === "GET") {

        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(products));
    }
    if (req.url === "/hola" && req.method === "GET") {
        res.setHeader("Content-Type", "text/html");
        const filePath = path.join(__dirname, "index_ajax.html");
            fs.readFile(filePath, "utf8", (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.end("Archivo no encontrado");
                    return;
                }
                res.writeHead(200);
                res.end(data);
            });
    }
    
});

server.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});