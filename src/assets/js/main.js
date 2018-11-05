function printUsers(data) {
  let tablahd = '';
  tablahd +=
    `<table class="highlight white card" id="myTable">
    <thead class="grey lighten-3">
    <tr>
        <th>Nombre<i class="material-icons" onclick="sortUsersName('DESC')">arrow_drop_down</i><i class="material-icons" onclick="sortUsersName('ASC')">arrow_drop_up</i></th>
        <th>Lecturas <i class="material-icons" onclick="sortReads('DESC')">arrow_drop_down</i><i class="material-icons" onclick="sortReads('ASC')">arrow_drop_up</i></th>
        <th>Ejercicios <i class="material-icons" onclick="sortExercices('DESC')">arrow_drop_down</i><i class="material-icons" onclick="sortExercices('ASC')">arrow_drop_up</i></th>
        <th>Quizzes <i class="material-icons" onclick="sortQuizzScore('DESC')">arrow_drop_down</i><i class="material-icons" onclick="sortQuizzScore('ASC')">arrow_drop_up</i></th>
        <th>Total <i class="material-icons" onclick="sortUsersPercent('DESC')">arrow_drop_down</i><i class="material-icons" onclick="sortUsersPercent('ASC')">arrow_drop_up</i></th>
    </tr>
    </thead>
    <tbody id="tabla"></tbody>
    </table>`;

  document.getElementById('tablahd').innerHTML = tablahd;

  let tabla = '';
  data.forEach(function(users) {
    if (users.name === '') {
      tabla +=
        `<tr>
            <td>SIN NOMBRE</td>
            <td>${users.stats.reads.percent}</td>
            <td>${users.stats.exercises.percent}</td>
            <td>${users.stats.quizzes.scoreAvg}</td>
            <td>${users.stats.percent}</td>
      </tr>`;
    } else {
      tabla +=
        `<tr>
        <td>${users.name}</td>
        <td>${users.stats.reads.percent}</td>
        <td>${users.stats.exercises.percent}</td>
        <td>${users.stats.quizzes.scoreAvg}</td>
        <td>${users.stats.percent}</td>
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
  let tabla = '';
  tabla += 
  `<div class="progress yellow">
    <div class="indeterminate  yellow darken-3"></div>
  </div>`;
  document.getElementById('tabla').innerHTML = tabla;
}
