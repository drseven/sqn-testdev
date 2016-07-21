var goodTypes = 'A';

function loadHistoryTransaksi() {
  $("#chart").height($("#chart-container").height());
  $("#chart").width($("#chart-container").width());
  var ctx = document.getElementById("myChart");
  var ctxData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
      label: "Type A",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
    }, {
      label: "Type B",
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgba(54, 162, 235, 1)",
      data: [28, 48, 40, 19, 86, 27, 90]
    }]
  };
  var ctxOption = {
    scales: {
    xAxes: [{
                gridLines: {
                    display:false
                }
            }],
    yAxes: [{
                gridLines: {
                    color: "rgba(200, 200, 200, 0.5)",
                }
            }]
    },
    responsive: true,
    maintainAspectRatio: false
  };

  var myBarChart = new Chart(ctx, {
      type: 'bar',
      data: ctxData,
      options: ctxOption
  });
}

function updateKeranjang(weight){
  console.log(weight);
  this.wxd=weight;
}

function fixlayout(){
}
