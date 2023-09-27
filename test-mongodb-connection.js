const { MongoClient } = require('mongodb');

// URL de conexão do MongoDB Atlas
const uri = "mongodb+srv://danielcamucatto:FyxK09edxCHc4xTG@cluster0.ktwbumi.mongodb.net/?retryWrites=true&w=majority";

// Crie uma função assíncrona para testar a conexão
async function testMongoDBConnection() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Conecte-se ao MongoDB Atlas
    await client.connect();

    // Verifique a conexão bem-sucedida
    console.log("Conexão com o MongoDB Atlas estabelecida!");

    // Execute consultas ou operações aqui, se necessário

  } finally {
    // Feche a conexão após o teste
    await client.close();
  }
}

// Chame a função de teste
testMongoDBConnection();
