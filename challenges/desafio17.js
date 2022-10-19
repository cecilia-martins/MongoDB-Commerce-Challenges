const total = db.produtos.countDocuments({});

db.resumoProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos: total,
}, {});

db.resumoProdutos.find({}, {
  _id: 0,
  franquia: 1,
  totalProdutos: 1,
});