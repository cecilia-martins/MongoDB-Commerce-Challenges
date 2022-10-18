db.produtos.updateOne({
  nome: { $in: ["Cheddar McMelt"] },
}, {
  $pop: { ingredientes: 1 },
});

// retorne o nome e ingredientes

db.produtos.find({}, {
  _id: 0,
  nome: 1,
  ingredientes: 1,
});