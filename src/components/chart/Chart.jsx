import { Paper } from '@mui/material';
import React from 'react';
import DonutChart from 'react-donut-chart';
import './chart.scss'
const data = [
  {
    label: "Net Banking",
    value: 25,
    color: "#00E396"
  },
  {
    label: "RDC",
    value: 65,
    color: "#FEB019"
  },
  {
    label: "STOCKIST",
    value: 100,
    color: "#FF4560"
  },
  {
    label: "HOSPITAL",
    value: 15,
    color: "#775DD0"
  }
];
const reactDonutChartBackgroundColor = [
  "#00E396",
  "#FEB019",
  "#FF4560",
  "#775DD0"
];
const reactDonutChartInnerRadius = 0.6;
const reactDonutChartSelectedOffset = 0.09;
const reactDonutChartHandleClick = (item, toggled) => {
  if (toggled) {
    console.log(item);
  }
};
let reactDonutChartStrokeColor = "#FFFFFF";
const reactDonutChartOnMouseEnter = (item) => {
  let color = data.find((legends) => legends.label === item.label).color;
  reactDonutChartStrokeColor = color;
};

const Chart = () => {
  return (
    <div >
      <Paper sx={{width : 530, height : 250,borderRadius : '10px',boxShadow : 2}}>
      <DonutChart
        className="chart"
        width={300}
        height = {300}
        onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
        strokeColor={reactDonutChartStrokeColor}
        data={data}
        colors={reactDonutChartBackgroundColor}
        innerRadius={reactDonutChartInnerRadius}
        selectedOffset={reactDonutChartSelectedOffset}
        onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
      />
      </Paper>
    </div>
  );
};

export default Chart;
