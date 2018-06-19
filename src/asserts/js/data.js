document.getElementById('jsonBtn').addEventListener('click', cargarJSON);

function cargarJSON() {
  fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json')
    .then((usersResponse) => {// es una función
      return usersResponse.json(); // hace la conexión y lo definimos como queremos que nos devuelvan los datos
    })
    .then(function(data) { // otra función
      let html = '';
      data.forEach(function(users) {
        html += `<div class="col-sm-4">${users.id}</div>
        <div class="col-sm-4">${users.signupCohort} </div>
        <div class="col-sm-4">${users.name}</div>

         `;
      });
      document.getElementById('resultado').innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
};

