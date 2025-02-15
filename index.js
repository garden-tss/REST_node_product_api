const express = require("express")
const {
	getProducts,
	getOneProduct,
	createProduct,
	updateProduct,
	deleteproduct
} = require("./services")

const app = express()

app.use(express.json())

app.get("/products", getProducts)

app.get("/products/:id", getOneProduct)

app.post("/products", createProduct)

app.put("/products/:id", updateProduct)

app.delete("/products/:id", deleteproduct)

app.listen(3000, () => console.log('server started on port 3000'))
