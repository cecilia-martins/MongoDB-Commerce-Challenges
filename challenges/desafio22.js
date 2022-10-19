db.produtos.updateMany({}, {
  $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] },
}, {});

// incremente as vendas de Big Mac às quartas-feiras em 60
db.produtos.updateOne({
  nome: { $in: ["Big Mac"] },
}, {
  $inc: { "vendasPorDia.3": 60 },
}, {});

// incremente as vendas de todos os sanduíches de carne do tipo bovino aos sábados em 120
db.produtos.updateMany({
  tags: { $in: ["bovino"] },
}, {
  $inc: { "vendasPorDia.6": 120 },
}, {});
// retorne o nome e vendasPorDia
db.produtos.find({}, {
  _id: 0,
  nome: 1,
  vendasPorDia: 1,
});