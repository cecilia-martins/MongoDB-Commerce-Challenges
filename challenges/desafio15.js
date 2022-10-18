db.produtos.updateMany({}, {
  $set: { avaliacao: NumberInt(0) },
}, {});

// query que incrementa avaliação 5 em bovino
db.produtos.updateMany({
  tags: { $in: ["bovino"] },
}, {
  $inc: { avaliacao: 5 },
}, {});

// quety que incrementa avaliação 3 em ave
db.produtos.updateMany({
  tags: { $in: ["ave"] },
}, {
  $inc: { avaliacao: 3 },
}, {});

// retorna nome e avaliação de tds os sandubas
db.produtos.find({}, {
  _id: 0,
  nome: 1,
  avaliacao: 1,
});