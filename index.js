const express = require("express")

const app = express()

let products = [
	{ id: 1, name: "soap", price: 2000 }
]

app.get("/products", (req, res) => {
	res.json(products)
})


app.listen(3000, () => console.log('server started on port 3000'))
