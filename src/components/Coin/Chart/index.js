import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./styles.css";

function LineChart({ chartData, options }) {
  return <Line data={chartData} options={options} />;
}

export default LineChart;
