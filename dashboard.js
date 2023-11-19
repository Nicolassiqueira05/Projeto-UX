
const pieChart = new Chart('pie-chart', {
  type: 'pie',
  data: {
    datasets: [{
      data: [10, 40, 20, 30],
      backgroundColor: ['#23D954', '#96CDFF', '#FCE940', '#F00303'],
    }],
    labels: ['#15150 - 10%', '#15267 - 40%', '#15275 - 20%', 'Refeições perdidas - 30%'],
  },
  options: {
    cutoutPercentage: 0,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Consumo geral por obra',
        fontColor: '#333',
        fontSize: 30,
        position: 'top',
      },
    },
  },
});

const consumChart = new Chart('geral-consum-chart', {
  type: 'bar',
  data: {
    labels: ['Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [{
      label: 'Consumo geral dos funcionários',
      data: [4, 6, 5, 3],
      backgroundColor: '#00CC95',
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

const lossChart = new Chart('geral-loss-chart', {
  type: 'bar',
  data: {
    labels: ['Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [{
      label: 'Perda de refeição',
      data: [4, 2, 3, 6],
      backgroundColor: '#00CC95',
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

const spendChart = new Chart('geral-spends-chart', {
  type: 'bar',
  data: {
    labels: ['Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [{
      label: 'Gastos Totais - 12.304,04 R$ este mês',
      data: [4, 2, 3, 6],
      backgroundColor: '#00CC95',
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});