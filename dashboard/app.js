fetch('/.netlify/functions/getCarbonData')
  .then(r=>r.json())
  .then(json=>{
    new Chart(document.getElementById('carbonChart'), {
      type: 'line',
      data: {
        labels: json.map(d=>d.timestamp),
        datasets: [{label: 'CO₂', data: json.map(d=>d.intensity), borderColor: 'red'}]
      }
    })
  })
