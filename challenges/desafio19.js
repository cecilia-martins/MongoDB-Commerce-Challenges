// db.produtos.deleteMany({
//   $pull: { ingredientes: { $in: ["cebola"] } }, 
// }, {});

db.produtos.updateMany({}, {
  $pull: { ingredientes: "cebola" }, 
}, {});

// retorne o nome e ingredientes

db.produtos.find({}, {
  _id: 0,
  nome: 1,
  ingredientes: 1,
});