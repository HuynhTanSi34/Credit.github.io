import React from "react";
import classes from "../UI/DashboardModule/dashboard.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  AreaChart,
  Area,
} from "recharts";

const data = [
  {
    name: "Tuần 1",
    Người: 24,
  },
  {
    name: "Tuần 2",

    Người: 13,
  },
  {
    name: "Tuần 3",

    Người: 98,
  },
  {
    name: "Tuần 4",

    Người: 39,
  },
];

export default function Month() {
  return (
    <div className={classes.leitem}>
      <AreaChart
        width={750}
        height={300}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Người"
          stroke="#82ca9d"
          fill="
          #93faba
          "
        />
      </AreaChart>
    </div>
  );
}
