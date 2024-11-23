const line = document.getElementById("main_page_line");
const text = document.getElementById("main_page_text");
const icon = document.getElementById("main_page_icon");

text.style.color = "#DA8359";
line.style.color = "#DA8359";
icon.classList = "bi bi-house-door navbar-icon";
icon.innerHTML = `<path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>`

const ctx = document.getElementById('EnergyChart');

const EnergyData = {
    labels: [
        'First',
        'Second',
        'Third'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        '#D8D17C',
        '#AEFF88',
        '#FF8888'
      ],
    }]
  };

new Chart(ctx, {
    type: 'doughnut',
    data: EnergyData,
});

const ctx2 = document.getElementById('WaterChart');

const WaterData = {
    labels: [
      'First',
      'Second',
      'Third'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        '#4C9DEC',
        '#F4DB99',
        '#B8FFFB'
      ],
    }]
  };

new Chart(ctx2, {
    type: 'doughnut',
    data: WaterData,
});