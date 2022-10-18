db.produtos.updateOne({
  nome: { $eq: "Big Mac" },
}, {
  $set: { ultimaModificacao: new Date() },
}, {});

// retorna nome - todos em q ultimaModificacao existir
db.produtos.find({
  ultimaModificacao: { $exists: true },
}, {
  _id: 0,
  nome: 1,
});