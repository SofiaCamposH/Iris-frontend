import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { format, parseISO } from "date-fns";
import { getHeartRate } from "../../api";
import "./styles.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HeartSensor = () => {
  const [heartRate, setHeartRate] = React.useState([]);
  const [isReading, setIsReading] = React.useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getHeartRate();
      setHeartRate(result);
    };
    fetchData();
  }, []);

  //   if isReading is true, then call the function every 5 second
  useEffect(() => {
    if (isReading) {
      const interval = setInterval(() => {
        const fetchData = async () => {
          const result = await getHeartRate();
          setHeartRate(result);
        };
        fetchData();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isReading]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Heart Rate Data",
      },
    },
  };

  const data = {
    labels: heartRate.map((item) =>
      format(parseISO(item.createdAt), "hh:mm dd/MM")
    ),
    datasets: [
      {
        label: "Historical BPM",
        data: heartRate.map((item) => item.reading),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <Line data={data} options={options} />
      <div
        style={{
          margin: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <h1>Real Time Pulse Sensor</h1>

        <div
          style={{
            backgroundColor: "white",
            width: "200px",
            height: "200px",
            borderRadius: 100,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
            marginTop: 30,
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
          }}
        >
          {isReading ? (
            <div>
              <div className="heart">
                {isReading && (
                  <h1
                    style={{
                      position: "absolute",
                      right: 15,
                      bottom: 15,
                      zIndex: 1,
                      color: "white",
                      fontSize: 24,
                    }}
                  >
                    {heartRate[heartRate.length - 1].reading}
                  </h1>
                )}
              </div>
            </div>
          ) : (
            <h1
              style={{ margin: 0, padding: 0 }}
              onClick={() => {
                setIsReading(true);
              }}
            >
              Start real-time reading
            </h1>
          )}
        </div>
        {isReading && (
          <div
            style={{
              backgroundColor: "white",
              width: "100px",
              height: "50px",
              marginTop: 20,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 100,
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
            }}
          >
            <h1
              style={{ lineHeight: 0, margin: 0, padding: 0 }}
              onClick={() => {
                setIsReading(false);
              }}
            >
              Stop
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default HeartSensor;
