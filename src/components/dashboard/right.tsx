// import "./styles.css";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import classes from "../UI/DashboardModule/dashboard.module.css";
const data = [
  { name: "Group A", value: 45 },
  { name: "Group B", value: 455 },
];

const COLORS = ["rgba(252, 249, 172, 1)", "rgba(89, 242, 141, 1)"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function Right() {
  return (
    <div className={classes.rightem}>
      <div className={classes.riti}>Bài viết trong tuần</div>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className={classes.ritale}>
        <table>
          <caption>500 bài viết</caption>
          <tr>
            <td className={classes.ritd}>
              <div className={classes.circle}></div>
            </td>
            <td>45 bài viết chưa được duyệt</td>
          </tr>
          <tr>
            <td className={classes.ritd}>
              <div className={classes.circle1}></div>
            </td>
            <td>455 bài viết đã được duyệt</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
