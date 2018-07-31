      //radar
      var ctxR = document.getElementById("radarChart").getContext('2d');
      var myRadarChart = new Chart(ctxR, {
          type: 'radar',
          data: {
              labels: ["Java",
                "Javascript",
                "Python",
                "Html",
                "CSS",
                "C++",
                "MySQL",
                "SQLite",
                "Ruby"],
              datasets: [
                  {
                      label: "Knowleadge",
                      fillColor: "rgba(220,220,220,0.2)",
                      strokeColor: "rgba(220,220,220,1)",
                      pointColor: "rgba(220,220,220,1)",
                      pointStrokeColor: "#fff",
                      pointHighlightFill: "#fff",
                      pointHighlightStroke: "rgba(220,220,220,1)",
                      data: [100,
                        35,
                        60,
                        90,
                        80,
                        25,
                        15,
                        90,
                        90]
                  }
                  /*,
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
                  */
              ]
          },
          options: {
              responsive: true
          }
      });