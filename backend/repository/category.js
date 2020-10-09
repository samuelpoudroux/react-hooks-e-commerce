var MongoClient = require('mongodb').MongoClient;

const getAllCategories = async () => {
  const client = await MongoClient.connect('mongodb://localhost:27017/spweb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  var db = client.db('spweb');

  const categories = await db.collection('categories').find().toArray();

  return categories;
};

module.exports = {
  getAllCategories
};
