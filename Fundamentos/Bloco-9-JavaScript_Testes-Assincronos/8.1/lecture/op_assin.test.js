// Testes assincronos com callbacks
// w/o done --> test false positive

test('Não deveria passar!', () => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
    }, 500);
  });

// w done: test false
// done --> indication that test is finalized
// fail because of timeout (something unexpected happened)
test('Não deveria passar!', (done) => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    }, 500);
  });

// w try/catch; try: execute function in scope; catch: catching error
// still: test false positive, because of no error action
test('Não deveria passar!', (done) => {
    setTimeout(() => {
      try {
        expect(10).toBe(5);
        console.log('Deveria falhar!');
        done();
      } catch (error) {
        done();
      }
    }, 500);
  });

// NOW: test fails
test('Não deveria passar!', (done) => {
    setTimeout(() => {
      try {
        expect(10).toBe(5);
        console.log('Deveria falhar!');
        done();
      } catch (error) {
        done(error); // Alteramos esta linha
      }
    }, 500);
  });


// Set e Teardown

test('Testa a função addCity', () => {
    expect.assertions(4);
    addCity('Campinas');
    addCity('Goiania');
    addCity('Recife');
    expect(cities).toHaveLength(3);
    expect(cities).toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
  });
  
  test('Testa a função removeCity', () => {
    expect.assertions(4);
    removeCity('Campinas');
    expect(cities).toHaveLength(2);
    expect(cities).not.toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
  });

// setup -> beforeEach; teardown -> afterEach
beforeEach(() => {
    cities = ['Pindamonhangaba'];
  });
  
  afterEach(() => {
    cities = [];
  });

test('Testa a função addCity utilizando o beforeEach', () => {
    expect.assertions(3);
    addCity('Piraporinha');
    expect(cities).toHaveLength(2);
    expect(cities).toContain('Pindamonhangaba');
    expect(cities).toContain('Piraporinha');
});
  
test('Testa a função removeCity utilizando o beforeEach', () => {
    expect.assertions(2);
    removeCity('Pindamonhangaba');
    expect(cities).not.toContain('Pindamonhangaba');
    expect(cities).toHaveLength(0);
});


