var goodTypes = 'A';
var harga = 0;
var prevweight = 0;

function loadHistoryTransaksi() {
  $("#chart").height($("#chart-container").height());
  $("#chart").width($("#chart-container").width());
  var ctx = document.getElementById("myChart");

  Chart.defaults.global.defaultFontColor = "#FFFFFF";
  Chart.defaults.global.title.display = true;
  Chart.defaults.global.title.text = "Data History"
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
          display: false
        },
        scaleLabel: {
          display: true,
          labelString: 'Bulan'
        }
      }],
      yAxes: [{
        gridLines: {
          color: "rgba(200, 200, 200, 0.5)",
        },
        scaleLabel: {
          display: true,
          labelString: 'Berat (Kg)'
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

function updateKeranjang(weight) {
  var totalHarga = (harga * weight).toFixed(2);
  $("#keranjang").attr({"weight": weight,"grandtotal": totalHarga});
  prevweight=weight;
  console.log(weight);
}

function fixlayout() {

}

function switchType(type) {
  if (goodTypes == "A") harga = 5000;
  else harga = 3000;
  goodTypes=type;
  $("#keranjang").attr({"title":goodTypes,"baseprice":harga});
  updateKeranjang(prevweight);
}
