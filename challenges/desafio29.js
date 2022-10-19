db.produtos.updateMany({}, {
  $rename: { descricao: "descricaoSite" },
}, {});

// nome e descricaoSite
db.produtos.find({}, {
  _id: 0,
  nome: 1,
  descricaoSite: 1,
});