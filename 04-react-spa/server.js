const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3003;

// Sample products data
const products = [
    { id: 1, name: "Laptop Gaming", price: 1200 },
    { id: 2, name: "Mouse Inalámbrico", price: 25 },      
    { id: 3, name: "Teclado Mecánico", price: 80 },
    { id: 4, name: "Monitor 4K", price: 350 },
    { id: 5, name: "Auriculares Bluetooth", price: 60 },
];

const server = http.createServer((req, res) => {
    // Enable CORS for cross-origin requests
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.url === "/products" && req.method === "GET") {
        // API endpoint to get products
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify(products));
        
    } else if (req.url === "/" || req.url === "/index.html") {
        // Serve the React SPA
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
        
    } else if (req.url === "/api/products/add" && req.method === "POST") {
        // Example POST endpoint to add a product
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const newProduct = JSON.parse(body);
                newProduct.id = products.length + 1;
                products.push(newProduct);
                
                res.setHeader("Content-Type", "application/json");
                res.writeHead(201);
                res.end(JSON.stringify(newProduct));
            } catch (error) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: "Invalid JSON" }));
            }
        });
        
    } else {
        // 404 for unknown routes
        res.writeHead(404);
        res.end("Ruta no encontrada");
    }
});

server.listen(port, () => {
    console.log(`🚀 Servidor React SPA corriendo en http://localhost:${port}`);
    console.log(`📡 API disponible en http://localhost:${port}/products`);
    console.log(`🌐 Aplicación disponible en http://localhost:${port}`);
});