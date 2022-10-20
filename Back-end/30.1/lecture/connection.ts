import { connect } from 'mongoose';

connect('mongodb://localhost:27017/nomeDaMinhaBaseDeDados');

connect('mongodb://localhost:27017/nomeDaMinhaBaseDeDados', { user: 'user', pass: 'password' }); //option

// variabel de ambiente
const options = {
    user: 'user', // Usuário do banco de dados.
    pass: 'password' // senha do usuário do banco de dados.
    //autoIndex: false, // Não cria index para cada inserção de dado no banco.
    //dbName: 'glassesStore', // Define qual banco de dados vou utilizar.
  };
  
  connect('mongodb://localhost:27017/', options);