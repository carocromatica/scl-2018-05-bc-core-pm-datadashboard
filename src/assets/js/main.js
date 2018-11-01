function printUsers(data) {

let tablota='';

tablota+=`  <table class="highlight white card">
<thead>
    <tr>
        <th>Nombre</th>
        <th>Lecturas</th>
        <th>Ejercicios</th>
        <th>Quizzes</th>
        <th>Total</th>
    </tr>
</thead>
<tbody id="tabla"></tbody>
</table>`;

document.getElementById('tablota').innerHTML = tablota;

  let tabla = '';
  data.forEach(function(users) {


    if (users.name==""){

      tabla += 
      `<tr>
      <td>SIN NOMBRE</td>

      <td>${users.stats.reads.percent}</td>
      <td>${users.stats.exercises.percent}</td>
      <td>${users.stats.quizzes.scoreAvg}</td>
      <td>${users.stats.percent}</td>
      </tr>`; 

    }

    else{
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