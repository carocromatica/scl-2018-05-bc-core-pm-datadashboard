function printUsers(data) {

  let tablota = '';

  tablota += `  <table class="highlight white card" id="myTable">
<thead>
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

  document.getElementById('tablota').innerHTML = tablota;

  let tabla = '';
  data.forEach(function (users) {
    if (users.name === '') {
      tabla +=
        `<tr>
      <td>SIN NOMBRE</td>
      <td>${users.stats.reads.percent}</td>
      <td>${users.stats.exercises.percent}</td>
      <td>${users.stats.quizzes.scoreAvg}</td>
      <td>${users.stats.percent}</td>
      </tr>`;
    }

    else {
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


  document.getElementById("tabla").innerHTML = "Datos no disponibles"
}


function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("filtro");
  filter = input.value.toUpperCase();
  table = document.getElementById("tabla");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


function loaded() {

  let tabla = '';

  tabla += `    <div class="preloader-wrapper big active">
  <div class="spinner-layer spinner-yellow-only">
    <div class="circle-clipper left">
      <div class="circle"></div>
    </div><div class="gap-patch">
      <div class="circle"></div>
    </div><div class="circle-clipper right">
      <div class="circle"></div>
    </div>
  </div>
</div>`;

  document.getElementById('tabla').innerHTML = tabla;
}



