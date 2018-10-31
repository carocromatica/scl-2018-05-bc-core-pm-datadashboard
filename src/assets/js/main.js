function printUsers(data) {
  let tabla = '';
  data.forEach(function(users) {
    tabla += 
    `<tr>
    <th>${users.name}</th>
    <td>${users.stats.percent}</td>
    <td>${users.stats.reads.percent}</td>
    <td>${users.stats.exercises.percent}</td>
    <td>${users.stats.quizzes.percent}</td>
    <td>${users.stats.quizzes.scoreAvg}</td>
    </tr>`;   
  });
  document.getElementById('tabla').innerHTML = tabla;

}