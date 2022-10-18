const ttt = db.produtos.countDocuments({});

db.resumoProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos: ttt,
}, {});

// retorna franquia, totalProdutos
db.resumoProdutos.find({}, {
  _id: 0,
  franquia: 1,
  totalProdutos: 1,
});