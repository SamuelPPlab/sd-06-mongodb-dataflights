db.voos.find({
  "aeroportoOrigem.pais": { $ne: "BRAZIL" },
}).count();
