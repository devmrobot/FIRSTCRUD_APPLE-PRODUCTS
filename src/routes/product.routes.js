const connection = require('../db-config');
const router = require('express').Router();

router.get('/', (req, res) => {
    connection.query('SELECT * FROM product', (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving products from database');
        }
        else 
        {
            res.json(results);
        }
    });
});

router.get('/:id', (req, res) => {
    const productId = req.params.id
    connection.query('SELECT * FROM product WHERE id=?',
    [productId],
    (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving products from database');
        }
        else 
        {
            if (results.length) res.json(results[0]);
            else res.status(404).send('Product not found');
        }
    });
});


router.post('/', (req, res) => {
    const { name, category, description, price, picture } = req.body;
connection.query(
    'INSERT INTO product (name, category, description, price, picture) VALUES (?, ?, ?, ?, ?)',
    [name, category, description, price, picture],
    (err, result) => {
        if (err) {
            res.status(500).send('Error retrieving products from database');
        }
        else 
        {
            const id = result.insertId;
            const createdProduct = { id, name, category, description, price, picture };
            res.status(201).json(createdProduct);
        }
    }
)
});

router.put('/:id', (req, res) => {
    const productId = req.params.id;
    const db = connection.promise();
    let existingProduct = null;

    db.query('SELECT * FROM product WHERE id = ?', 
    [productId])
    .then(([results]) => {
        existingProduct = results[0];
        if (!existingProduct) return Promise.reject('PRODUCT not found')
        return db.query('UPDATE product SET ? WHERE id = ?', [req.body, productId]);
    })
    .then(() => {
        res.status(200).json({...existingProduct, ...req.body});
    })
    .catch((err) => {
        console.log(err);
        if (err === 'PRODUCT not found')
        res.status(404).send(`Product with id ${productId} not found.`)
        else {
            res.status(500).send('Error updating product from database');
        }
    });
});

router.delete('/:id', (req, res) => {
    const productId = req.params.id;
    connection.query(
        'DELETE FROM product WHERE id = ?',
        [productId],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error while deleting a product');
            }
            else
            {
                if(result.affectedRows) res.status(200).send('🎉 Product deleted')
                else res.status(404).send('Product not found!')
            }
        }
    )
})





module.exports = router;