let products = [
	{ id: 1, name: "soap", price: 2000 }
]

const getProducts = (req, res) => {
	res.json(products)
}

const getOneProduct = (req, res) => {
	const product = products.find(p => p.id === +req.params.id)
	res.json(product)
}

const createProduct = (req, res) => {
	const product = req.body

	products.push({ id: products.length, ...product })
	res.json({ message: "data updated", })

}


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

const deleteproduct = (req, res) => {
	products = products.filter(p => p.id !== +req.params.id)
	res.json({ message: "deleted succesfully" })
}

module.exports = {
	getProducts,
	getOneProduct,
	createProduct,
	updateProduct,
	deleteproduct
}
