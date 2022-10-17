db.produtos.find({

}, {
  _id: 0,
  nome: 1,
  vendidos: 1,
}).sort({ vendidos: -1 }).limit(1);

// https://stackoverflow.com/questions/32076382/mongodb-how-to-get-max-value-from-collections