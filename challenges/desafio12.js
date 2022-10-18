db.produtos.updateMany({
  nome: { $ne: "McChicken" }, // filtro
}, {
  $addToSet: { ingredientes: "ketchup" }, // update
}, {});

db.produtos.find({}, {
  _id: 0,
  nome: 1,
  ingredientes: 1,
});