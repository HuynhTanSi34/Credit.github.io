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
    name: "Ngày: 1",
    Per: 24,
    week: "Tuần 1",
    Perw: 25,
    month: "1",
    seen: 10,
  },
  {
    name: "Ngày: 8",
    Per: 13,
    week: "Tuần 2",
    Perw: 25,
    month: "2",
    seen: 40,
  },
  {
    name: "Ngày: 15",
    Per: 98,
    week: "Tuần 3",
    Perw: 25,
    month: "3",
    seen: 30,
  },
  {
    name: "Ngày: 22",
    Per: 39,
    week: "Tuần 4",
    Perw: 25,
    month: "4",
    seen: 60,
  },
  {
    name: "Ngày: 30",
    Per: 48,
    month: "5",
    seen: 30,
  },
  // {
  //   month: "6",
  //   seen: 30,
  // },
  // {
  //   month: "7",
  //   seen: 30,
  // },
  // {
  //   month: "8",
  //   seen: 30,
  // },
  // {
  //   month: "9",
  //   seen: 30,
  // },
  // {
  //   month: "10",
  //   seen: 30,
  // },
  // {
  //   month: "11",
  //   seen: 30,
  // },
  // {
  //   month: "12",
  //   seen: 30,
  // },
];

export default function Left() {
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
          dataKey="Per"
          stroke="#82ca9d"
          fill="
          #93faba
          "
        />
      </AreaChart>
    </div>
  );
}
