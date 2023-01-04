import "../UI/style.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
// import * as image from "../image";
import fe from "../image/fe.png";
import das from "../image/das.png";
import management from "../image/management.png";
import news from "../image/news.png";
import list from "../image/list.png";
import email from "../image/email.png";
function List() {
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
  const disapperPopUp = () => {
    setShow("");
  };
  return (
    <div>
      <div className="flogo">
        <img src={fe} alt="Lỗi" className="logo" />
      </div>
      <div className="listit">
        <NavLink
          activeClassName="active"
          to="/dashboard/dashboard"
          className={`Link ${show === "0" ? "active" : ""}`}
          exact={true}
        >
          {/* <button
            key={0}
            className={`  ${show === "0" ? "active" : "button"}`}
            id={0}
            onClick={() => clickHandler("0")}
          > */}
          <div className="listitem">
            <img src={das} alt="Lỗi" className="itemimg" />
            <div>Bảng điều khiển</div>
          </div>
          {/* </button> */}
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/recruitment/listrecruitment"
          className={`Link ${show === "1" ? "active" : ""}`}
        >
          {/* <button
          key={1}
          className={`  ${show === "1" ? "active" : "button"}`}
          id={1}
          onClick={() => clickHandler("1")}
        > */}
          <div className="listitem">
            <img src={management} alt="Lỗi" className="itemimg" />
            <div>Quản lý tuyển dụng</div>
          </div>
          {/* </button> */}
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/news/listnews"
          className={`Link  ${show === "2" ? "active" : ""}`}
        >
          {/* <button
          key={2}
          className={`  ${show === "2" ? "active" : "button"}`}
          id={2}
          onClick={() => clickHandler("2")}
        > */}
          <div className="listitem">
            <img src={news} alt="Lỗi" className="itemimg" />
            <div>Quản lý tin tức</div>
          </div>
          {/* </button> */}
        </NavLink>
        <NavLink
          to="/mailask/listmail"
          className={`Link  ${show === "3" ? "active" : ""}`}
          activeClassName="active"
        >
          {/* <button
            key={3}
            className={`  ${show === "3" ? "active" : "button"}`}
            id={3}
            onClick={() => clickHandler("3")}
          > */}
          <div className="listitem">
            <img src={email} alt="Lỗi" className="itemimg" />
            <div>Hộp thư hỏi đáp</div>
          </div>
          {/* </button> */}
        </NavLink>
        <NavLink
          className={`Link ${show === "4" ? "active" : ""}`}
          to="/staff/liststaff"
          activeClassName="active"
        >
          {/* <button
            key={4}
            className={` ${show === "4" ? "active" : "button"}`}
            id={4}
            onClick={() => clickHandler("4")}
          > */}
          <div className="listitem">
            <img src={list} alt="Lỗi" className="itemimg" />
            <div>Quản lý nhân viên</div>
          </div>
          {/* </button> */}
        </NavLink>
        {/* {show == "1" && (
          <div className="droptuyendung" onMouseLeave={() => disapperPopUp()}>
            <NavLink
              activeClassName="active1"
              to="/recruitment/addrecruitment"
              className={`Link ${show === "5" ? "Link" : "active1"}`}
            >
              <div className="droptuyendungitem">Thêm tin tuyển dụng</div>
            </NavLink>
            <NavLink
              activeClassName="active2"
              to="/recruitment/listrecruitment"
              className={` Link ${show === "6" ? "active2" : "active2"}`}
            >
              <div className="droptuyendungitem">Danh sách tin tuyển dụng</div>
            </NavLink>
          </div>
        )} */}
        {/* {show == "2" && (
          <div className="droptintuc" onMouseLeave={() => disapperPopUp()}>
            <Link to="/news/addnews" className="Link">
              <div className="droptintucitem">Thêm tin tức</div>
            </Link>
            <Link to="/news/listnews" className="Link">
              <div className="droptintucitem">Danh sách tin tức</div>
            </Link>
          </div>
        )} */}
        {/* {show == "4" && (
          <div className="dropnhanvien" onMouseLeave={() => disapperPopUp()}>
            <Link to="/staff/addstaff" className="Link">
              <div className="dropnhanvienitem">Thêm nhân viên</div>
            </Link>
            <Link to="/staff/liststaff" className="Link">
              <div className="dropnhanvienitem">Danh sách nhân viên</div>
            </Link>
          </div>
        )} */}
      </div>
    </div>
  );
}
export default List;
