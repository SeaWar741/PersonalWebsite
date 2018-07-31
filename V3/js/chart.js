      //radar
      var ctxR = document.getElementById("radarChart").getContext('2d');
      var myRadarChart = new Chart(ctxR, {
          type: 'radar',
          data: {
              labels: ["Object Oriented programming", "Web Development", "Design", "Data Science", "Social Media Management", "Video Editing"],
              datasets: [
                  {
                      label: "Knowleadge",
                      fillColor: "rgba(220,220,220,0.2)",
                      strokeColor: "rgba(220,220,220,1)",
                      pointColor: "rgba(220,220,220,1)",
                      pointStrokeColor: "#fff",
                      pointHighlightFill: "#fff",
                      pointHighlightStroke: "rgba(220,220,220,1)",
                      data: [100, 60, 95, 25, 80, 90]
                  },
                  {
                      label: "Experience",
                      fillColor: "rgba(151,187,205,0.2)",
                      strokeColor: "rgba(151,187,205,1)",
                      pointColor: "rgba(151,187,205,1)",
                      pointStrokeColor: "#fff",
                      pointHighlightFill: "#fff",
                      pointHighlightStroke: "rgba(151,187,205,1)",
                      data: [70, 100, 100, 10, 96, 100]
                  }
              ]
          },
          options: {
              responsive: true
          }
      });