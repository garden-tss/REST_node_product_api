const express = require("express")

const app = express()

app.use(express.json())

let products = [
	{ id: 1, name: "soap", price: 2000 }
]

app.get("/products", (req, res) => {
	res.json(products)
})


app.get("/products/:id", (req, res) => {
	const product = products.find(p => p.id === +req.params.id)
	res.json(product)
})


app.post("/products", (req, res) => {
	const product = req.body

	products.push({ id: products.length, ...product })
	res.json({ message: "data updated", })

})

app.put("/products/:id", (req, res) => {
	const dataupdate = req.body

	products = products.map(p => {
		if (p.id === +req.params.id) {
			return { ...p, ...dataupdate }
		}

		return p
	})

	res.json({ message: "data updated" })

})

app.delete("/products/:id", (req, res) => {
	products = products.filter(p => p.id !== +req.params.id)
	res.json({ message: "deleted succesfully" })
})

app.listen(3000, () => console.log('server started on port 3000'))
