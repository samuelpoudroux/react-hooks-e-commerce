var MongoClient = require('mongodb').MongoClient;

const buildGlobalSearchResult = async (db) => {
  const collectionsListArray = await db.listCollections().toArray();
  // nous transformons le tableau ci dessous en tableau de promesse par flatmap
  const promises = collectionsListArray.flatMap(async (collection) => {
    if (collection.name !== 'users') {
      return [
        collection.name,
        await db.collection(collection.name).find().toArray()
      ];
    } else {
      return [];
    }
  });

  // nous transformons le tableau de promesse en objet pour le retourner
  return Object.fromEntries(await Promise.all(promises));
};
const getResultOfGlobalSearch = async () => {
  try {
    const client = await MongoClient.connect(
      'mongodb://localhost:27017/spweb',
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    var db = client.db('spweb');
    const globalSearch = await buildGlobalSearchResult(db);
    return globalSearch;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getResultOfGlobalSearch
};
