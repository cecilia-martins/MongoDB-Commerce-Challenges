db.produtos.updateOne({
  nome: { $in: ["Quarteirão com Queijo"] },
}, {
  $pop: { ingredientes: -1 },
});

// retorne o nome e ingredientes

db.produtos.find({}, {
  _id: 0,
  nome: 1,
  ingredientes: 1,
});