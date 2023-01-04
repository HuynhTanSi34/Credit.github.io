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
    name: " 1",
    Người: 24,
  },
  {
    name: " 2",

    Người: 13,
  },
  {
    name: " 3",

    Người: 98,
  },
  {
    name: " 4",

    Người: 39,
  },
  {
    name: " 5",

    Người: 48,
  },
  {
    name: " 6",

    Người: 38,
  },
  {
    name: " 7",

    Người: 43,
  },
  {
    name: " 8",

    Người: 43,
  },
  {
    name: " 9",

    Người: 43,
  },
  {
    name: " 10",

    Người: 43,
  },
  {
    name: " 11",

    Người: 43,
  },
  {
    name: " 12",

    Người: 43,
  },
];

export default function Year() {
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
