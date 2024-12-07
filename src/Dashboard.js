
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

function Dashboard() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/api/data")
        .then((response) => response.json())
        .then((data) => {
          setChartData({
            labels: data.timestamps,
            datasets: [
              {
                label: "Real-Time Data",
                data: data.values,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 2,
              },
            ],
          });
        });
    }, 2000); // Fetch data every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Real-Time Data Visualization</h2>
      <Line data={chartData} />
    </div>
  );
}

export default Dashboard;
