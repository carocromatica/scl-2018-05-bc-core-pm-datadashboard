let users;
let progress;
let cohorts;

let userId = {};
let userName = 0;
let userPercent = 0;
let userProgress = 0; // tratando de entrar al objeto para sacar % de lecturas y demases

let partes = 0;
let types = 0;
let asdf = '';

// archivo para experimentar con js
Promise.all([ // Ejecuta todas las llamadas de manera paralela.
  fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json'),
  fetch('../data/cohorts/lim-2018-03-pre-core-pw/progress.json'),
  fetch('../data/cohorts.json')
]).then((responses) => { // Responde a todas las promesas.
  return Promise.all(responses.map((response => response.json()))); // traduce el "el texto plano" en JSON
}).then((data) => { // Arreglo de respuestas en json.
  users = Object.values(data[0]);
  progress = Object.values(data[1]);
  cohorts = Object.keys(data[2]);
}).catch(
  () => {
    console.log('fallo fetch');
  }
);

function computeUsersStats() {
  let contador = 0;
  

  for (i = 0; i < users.length; i++) { // recorrido que reconoce los id
    userId = users[i].id; // obtiene id
    userName = users[i].name; // obtiene nombre

    userError = progress[i]; // para saltarse estudiantes con {} vacio
    if (JSON.stringify(userError) === '{}') {
      continue;
    } // fin para saltarse {} vacio

    userPercent = progress[i].intro.percent; // obtiene porcentaje total
    userProgress = Object.values(progress[i].intro.units); // aqui entro al objeto units


    // js no puede leer el 01-nombre unidad, asi que uso foreach para entrar
    let readsCompleted = 0;
    let quizCompleted = 0;
    let practiceCompleted = 0;
    
    userProgress.forEach(course => {
      Object.values(course.parts).forEach(parts => {
        switch (parts.type) {
        case 'read':
          if (parts.completed === 1) {
            readsCompleted++;
          }
          case 'quiz':
          if (parts.completed == 1) {
            quizCompleted++;
          }
          case 'practice':
          if (parts.completed == 1) {
            practiceCompleted++;
          }
        };
      });
    });

    contador++;

    console.log(contador + ' // id: ' + userId);
    console.log('nombre: ' + userName);
    console.log('porcentaje: ' + userPercent);
    console.log('cursos: ' + userProgress);

    console.log('--------------------------------------');
    console.log(readsCompleted);
    console.log(quizCompleted);
    console.log(practiceCompleted);
    console.log('---------------------------------------');
  }
}