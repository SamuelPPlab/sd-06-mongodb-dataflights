db.voos.find({ $and: [{ ano: { $gt: 2016 } }, { ano: { $lt: 2019 } }] }).count();
