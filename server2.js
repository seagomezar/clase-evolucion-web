const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3001;

const products = [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },      
    { id: 3, name: "Producto 3", price: 300 },
];

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Hola Soy Sebas</h1>
    <ul>
        ${products.map(product => `<li>${product.name} - $${product.price}</li>`).join('')}
    </ul>
    <button onclick="saludar()">Haz click</button>
    
</body>
</html>`);
});

server.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});