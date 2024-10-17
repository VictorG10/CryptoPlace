import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import "./chart.css";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];

    if (historicalData.prices) {
      historicalData.prices.map((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
        setData((d) => (d = dataCopy));
      });
    }
  }, [historicalData]);

  return (
    <Chart
      chartType="Line"
      width="100%"
      height="100%"
      data={data}
      legendToggle
    />
  );
};

export default LineChart;
