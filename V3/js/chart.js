//radar
var ctxR = document.getElementById("radarChart").getContext('2d');
var myRadarChart = new Chart(ctxR, {
    type: 'radar',
    data: {
        labels: ["Java",
          "Ruby",
          "Python",
          "Html",
          "CSS",
          "C++",
          "MySQL",
          "SQLite",
          "Javascript"],
        datasets: [
            {
                label: "Knowleadge",
                backgroundColor: "rgba(243, 61, 67, 0.3)",
                borderColor: "rgba(246, 54, 65, 0.5)",
                pointBackgroundColor: "rgba(246, 54, 65, 1)",
                pointBorderColor: "rgba(255, 255, 255, 1)",
                lineTension: 0.00009,
                data: [100,
                  90,
                  60,
                  90,
                  80,
                  25,
                  20,
                  90,
                  40]
            }           
        ]
    },
    options: {
        responsive: true
    }
});