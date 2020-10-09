const jwt = require('jsonwebtoken');
var MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcrypt');
const { validateRegisterInput } = require('../validation/register');
const accessTokenSecret = 'spwebTokenJeSuisIndechiffrable';

const login = async (email, password) => {
  try {
    const client = await MongoClient.connect(
      'mongodb://localhost:27017/spweb',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );

    var db = client.db('spweb');
    const user = await db.collection('users').findOne({ email: email });
    if (!user) {
      return { error: 'utilisateur inexistant' };
    } else if (user) {
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        return { error: 'mot de passe ou identifiant incorrect' };
      }

      const accessToken = jwt.sign(
        { email: user.email, role: user.role },
        accessTokenSecret
      );
      return {
        ...user,
        token: accessToken
      };
    }
  } catch (e) {
    throw e.message;
  }
};

const register = async (body) => {
  try {
    const { errors, isValid } = await validateRegisterInput(body);
    if (!isValid) {
      return { errors };
    }
    const hash = await bcrypt.hash(body.password, 10);
    const client = await MongoClient.connect(
      'mongodb://localhost:27017/spweb',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );

    var db = client.db('spweb');
    const user = await db.collection('users').findOne({ email: body.email });
    if (!user) {
      await db
        .collection('users')
        .insertOne({ ...body, role: 'user', password: hash });
      client.close();
      return { message: 'Utilisateur enregistré avec succés' };
    } else {
      client.close();
      return { errors: 'utilisateur déjà existant' };
    }
  } catch (error) {
    return error;
  }
};

module.exports = { login, register };
