function printUsers(data) {

  let botones= '';
  botones +=
    `
    <canvas id="myChart"></canvas>
    <button onclick="tabla()">tabla</button>
    <button onclick="chart()">resumen</button>
    
    
  `;

  document.getElementById('botones').innerHTML = botones;



  let tablahd = '';
  tablahd +=
    `
 
    
    
    <table class="highlight white card" id="myTable">
    <thead class="grey lighten-3">
    <tr>


        <th>Nombre
        <i class="material-icons " onclick="sortUsersName('DESC')" id="down_name">arrow_drop_down</i>
        <i class="material-icons " onclick="sortUsersName('ASC')" id="up_name">arrow_drop_up</i></th>

        <th class="center-align">Lecturas 
        <i class="material-icons " onclick="sortReads('DESC')">arrow_drop_down</i>
        <i class="material-icons " onclick="sortReads('ASC')">arrow_drop_up</i></th>

        <th class="center-align">Ejercicios  
        <i class="material-icons " onclick="sortExercices('DESC')">arrow_drop_down</i>
        <i class="material-icons " onclick="sortExercices('ASC')">arrow_drop_up</i></th>

        <th class="center-align">Quizzes 
        <i class="material-icons " onclick="sortQuizzScore('DESC')">arrow_drop_down</i>
        <i class="material-icons " onclick="sortQuizzScore('ASC')">arrow_drop_up</i></th>

        <th class="center-align">Total 
        <i class="material-icons " onclick="sortUsersPercent('DESC')" id="icono">arrow_drop_down</i>
        <i class="material-icons " onclick="sortUsersPercent('ASC')" id="icono">arrow_drop_up</i></th>
    </tr>
    </thead>
    <tbody id="tabla"></tbody>
    </table>`;

  document.getElementById('loaded').innerHTML = tablahd;

  let tabla = '';

  data.forEach(function(users) {
    if (users.name === '') {
      tabla +=
        `<tr>
   
            <td>SIN NOMBRE</td>
            <td class="center-align">${users.stats.reads.percent}</td>
            <td class="center-align">${users.stats.exercises.percent}</td>
            <td class="center-align">${users.stats.quizzes.scoreAvg}</td>
            <td class="center-align">${users.stats.percent}</td>
      </tr>`;
    } else {
      tabla +=
        `<tr>
    
        <td>${users.name}</td>
        <td class="center-align">${users.stats.reads.percent}</td>
        <td class="center-align">${users.stats.exercises.percent}</td>
        <td class="center-align">${users.stats.quizzes.scoreAvg}</td>
        <td class="center-align">${users.stats.percent}</td>
      </tr>`;
    }
  });
  document.getElementById('tabla').innerHTML = tabla;
}

function printUsersnull() {
  document.getElementById('tabla').innerHTML = 'Datos no disponibles';
}

function filterUsers() {
  var input, filter, table, tr, td, i;
  input = document.getElementById('filtro');
  filter = input.value.toUpperCase();
  table = document.getElementById('tabla');
  tr = table.getElementsByTagName('tr');
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }
  }
}

function loaded() {
  let loaded = '';
  loaded += 
  `<div class="progress yellow">
    <div class="indeterminate  yellow darken-3"></div>
  </div>`;
  document.getElementById('loaded').innerHTML = loaded;
}
