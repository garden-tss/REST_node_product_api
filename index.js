const express = require("express")

const app = express()

app.use(express.json())

let products = [
	{ id: 1, name: "soap", price: 2000 }
]

const getProducts = (req, res) => {
	res.json(products)
}

app.get("/products", getProducts)

const getOneProduct = (req, res) => {
	const product = products.find(p => p.id === +req.params.id)
	res.json(product)
}

app.get("/products/:id", getOneProduct)

const createProduct = (req, res) => {
	const product = req.body

	products.push({ id: products.length, ...product })
	res.json({ message: "data updated", })

}
app.post("/products", createProduct)

const updateProduct = (req, res) => {
	const dataupdate = req.body

	products = products.map(p => {
		if (p.id === +req.params.id) {
			return { ...p, ...dataupdate }
		}

		return p
	})

	res.json({ message: "data updated" })

}

app.put("/products/:id", updateProduct)

const deleteproduct = (req, res) => {
	products = products.filter(p => p.id !== +req.params.id)
	res.json({ message: "deleted succesfully" })
}

app.delete("/products/:id", deleteproduct)

app.listen(3000, () => console.log('server started on port 3000'))
