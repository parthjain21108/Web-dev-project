document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'login.html';
        return;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const caloriesCtx = document.getElementById('caloriesChart').getContext('2d');
    new Chart(caloriesCtx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Calories Burned',
                data: [750, 820, 900, 850, 950, 1100, 850],
                borderColor: '#42c8c9',
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const workoutCtx = document.getElementById('workoutChart').getContext('2d');
    new Chart(workoutCtx, {
        type: 'doughnut',
        data: {
            labels: ['Chest', 'Back', 'Legs', 'Arms'],
            datasets: [{
                data: [30, 25, 25, 20],
                backgroundColor: [
                    '#42c8c9',
                    '#d6abd8',
                    '#eeb5c6',
                    '#b2b4e4'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
});

document.getElementById('workoutForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Workout added successfully!');
    this.reset();
});

function exportCSV() {
    alert('Exporting to CSV...');
}

function exportPDF() {
    alert('Exporting to PDF...');
}

function updateMetrics() {
    const metrics = document.querySelectorAll('.metric-value');
    metrics.forEach(metric => {
        const currentValue = parseInt(metric.textContent);
        const newValue = currentValue + Math.floor(Math.random() * 21) - 10;
        metric.textContent = newValue;
    });
}

setInterval(updateMetrics, 300000); 