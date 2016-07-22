function gauge3() {
  var divWidth = $("#divgauge").width();
  var divHeight = $("#divgauge").width(); //fix to width
  $("#gauge-label").height(divWidth);
  $("#gauge-container").height(divWidth);
  console.log(divHeight);
  console.log(divWidth);
  var gauge = new Gauge({
    renderTo: 'gauge',
    width: divWidth,
    height: divHeight,
    glow: true,
    units: 'kg',
    title: false,
    minValue: 0,
    maxValue: 1000,
    majorTicks: ['0', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
    minorTicks: 10,
    strokeTicks: false,
    // highlights  : [
    // 	{ from : 0,   to : 100, color : 'rgba(0,   255, 0, .15)' },
    // 	{ from : 100, to : 160, color : 'rgba(255, 255, 0, .15)' },
    // 	{ from : 160, to : 220, color : 'rgba(255, 30,  0, .25)' }
    // ],
    highlights: false,
    colors: {
      plate: '#222',
      majorTicks: '#f5f5f5',
      minorTicks: '#ddd',
      title: '#fff',
      units: '#ccc',
      numbers: '#eee',
      needle: {
        start: 'rgba(240, 128, 128, 1)',
        end: 'rgba(255, 160, 122, .9)'
      },
      circle: {
        shadow: false,
        // outerStart: '#333',
        // outerEnd: '#111',
        // middleStart: '#222',
        // middleEnd: '#111',
        // innerStart: '#111',
        // innerEnd: '#333'
      },
      valueBox: {
        rectStart: '#222',
        rectEnd: '#333',
        background: '#babab2',
        shadow: 'rgba(0, 0, 0, 1)'
      }
    },
    animation: {
      delay: 25,
      duration: 1000,
      fn: 'elastic'
    }
  });

  gauge.onready = function() {
    setInterval(function() {
      var weight = Math.random() * 1000;
      gauge.setValue(weight);
      updateKeranjang(weight.toFixed(2));
    }, 3000);
  };

  gauge.draw();
}
