
function chart(){

var ctx = document.getElementById('myChart').getContext('2d');

document.getElementById('myChart').style.display = "block";
document.getElementById("myTable").style.display = "none";
myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Optimo', 'Bueno', 'Regular', 'Malo'],
    datasets: [{
      label: '# Completitud',
      data: [optimo, bueno, regular, malo],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',

      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
       
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

}


function tabla(){
  document.getElementById('myChart').style.display = "none";
  document.getElementById("myTable").style.display = "block";

}

  