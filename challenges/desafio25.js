db.produtos.updateMany({
  valoresNutricionais: { $elemMatch: {
    tipo: "sódio",
    percentual: { $gt: 40 },
  } },
}, {
  $addToSet: { tags: "muito sódio" },
}, {});

// retorna nome e tags
db.produtos.find({}, {
  _id: 0,
  nome: 1,
  tags: 1,
});