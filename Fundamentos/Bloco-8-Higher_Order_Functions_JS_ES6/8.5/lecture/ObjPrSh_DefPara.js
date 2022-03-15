// Object Property Shorthand (w/o)
const newUser = (id, name, email) => {
    return {
      id: id,
      name: name,
      email: email,
    };
  };
  
  console.log(newUser(54, 'isabella', 'isabella@email.com'));


// Object Property Shorthand (w)
const newUser = (id, name, email) => {
    return {
      id,
      name,
      email,
    };
  };
  
  console.log(newUser(54, 'isabella', 'isabella@email.com'));


// Default Parameters (w/o)
const greeting = (user) => {
    const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
    console.log(`Welcome ${userDisplay}!`);
}

greeting();

// Default Parameters (w)
const greeting = (user = 'usuario') => console.log(`Welcome ${user}!`);
greeting();