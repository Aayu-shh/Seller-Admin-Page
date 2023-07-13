const Product = require("../model/product");

exports.show = (req, res, next) => {
    Product.findAll()
        .then(resp => res.send(resp))
        .catch(err => console.log(err));
}

exports.add = (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    Product.create({ name: name, price: price })
        .then(result => res.send(result.dataValues));
}

exports.delete = (req, res, next) => {
    const id = req.params.id;
    Product.findByPk(id)
        .then(result => Product.destroy({
            where: {
                id: result.dataValues.id
            }
        }))
        .then(resp => res.send('deleted'))
        .catch(err => console.log(err));

}