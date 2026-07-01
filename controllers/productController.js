let products = [
    {
        id: 1, name: 'laptop', price: 1200
    },
    {
        id: 2, name: 'mouse', price: 25
    }
];

// @desc Get all products
// @route GET /api/products
export function getProducts (req, res){
    res.status(200).json({success: true, data: products})
}

// @desc Create product
// @route POST /api/products
export function createProduct(req, res){
    const {name, price} = req.body;

    if(!name || !price)
    {
        return res.status(400).json({success: false, message: 'Product not provided'})
    }
    const newProduct = {
        id: products.length + 1,
        name, 
        price
    };
    products.push(newProduct)
    res.status(201).json({success: true, data: newProduct})
}

