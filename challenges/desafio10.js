db.voos.find({"empresa.nome" : "GOL"}, {
  "vooId": true,
  _id: false,
  "empresa.nome": true,
  "aeroportoOrigem.nome": true,
  "aeroportoDestino.nome": true,
  "mes": true, "ano": true
}).limit(10);
