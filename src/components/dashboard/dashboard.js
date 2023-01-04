import "../UI/style.css";
import { useEffect, useState } from "react";
import classes from "../UI/DashboardModule/dashboard.module.css";
import Avatar from "./avatar.js";
import Right from "./right.tsx";
import Left from "./left.tsx";
import Year from "./years.tsx";
import Month from "./month.tsx";
import Dropdown from "react-dropdown";
import List from "../listDashboard/listDashboard";
function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard";
  });
  const [show, setShow] = useState("");
  const clickHandler = (number) => {
    switch (number) {
      case "0":
        setShow(number);
        break;
      case "1":
        setShow(number);
        break;
      case "2":
        setShow(number);
        break;
      case "3":
        setShow(number);
        break;
      case "4":
        setShow(number);
        break;
      default:
        console.log("error ");
        break;
    }
  };
  const options = ["Ngày", "Tháng", "Năm"];
  const defaultOption = options[0];
  const chart = () => {
    if (options == options[0]) {
      return <Left />;
      console.log("error ");
    }
    if (options[1]) {
      return <Month />;
    }
    if (options[2]) {
      return <Year />;
    }
  };
  return (
    <div className="screen">
      <section className={classes.list}>
        <List />
      </section>
      <section className={classes.content}>
        <div className={classes.title}>
          <div className={classes.title1}>Bảng điều khiển</div>
          <Avatar />
        </div>
        <div className={classes.text}>
          <div className={classes.left}>
            <div className={classes.leti}>
              Thống kê số lượng người truy cập theo:
            </div>
            <div className={classes.ledrop}>
              <Dropdown
                options={options}
                // onClick={() => clickHandler(0)}
                // onChange={(e) => handleDropdownValue(e)}
                value={defaultOption}
                placeholder="Select an option"
              />
            </div>
            {defaultOption == options[0] ? <Left /> : <div />}
            {defaultOption == options[1] ? <Month /> : <div />}
            {defaultOption == options[2] ? <Year /> : <div />}
            {/* <Left /> */}
          </div>
          <div className={classes.right}>
            <Right />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Dashboard;
