import "../UI/style.css";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import classes from "../UI/StaffModule/liststaff.module.css";
import seach from "../image/seach.png";
import pastpage from "../../components/image/pastpage.png";
import nextpage from "../../components/image/nextpage.png";
import Avatar from "../dashboard/avatar.js";
import List from "../listDashboard/listDashboard";
import userApi from "../api/userApi";
import axiosClient from "../api/axiosClient";
function Liststaff() {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    document.title = "Danh sách nhân viên";
    const fetchUser = async () => {
      const userList = await userApi.getAll();
      // console.log(userList);
      const userGet = await axiosClient
        .get("user?limit=50&page=1")
        .then((response) => {
          setListData(response.data.data);
        });
      // console.log(userGet);
    };
    fetchUser();
  }, []);
  const ServiceActivePoint = (value) => {
    return (
      <div className={classes.td61}>
        <div className={classes.circlegreen}></div>
        <div>Đang làm việc</div>
      </div>
    );
  };
  const ServiceUnactivePoint = (value) => {
    return (
      <div className={classes.td61}>
        <div className={classes.circlered}></div>
        <div>Đã nghỉ việc</div>
      </div>
    );
  };
  const [pageNumber, setPageNumber] = useState(0);
  const usersPrePage = 9;
  const pagesVisited = pageNumber * usersPrePage;
  return (
    <div className="screen">
      <section className={classes.list}>
        <List />
      </section>
      <section className={classes.content}>
        <div className={classes.title}>
          <div className={classes.title1}>Danh sách nhân viên</div>
          <Avatar />
        </div>
        <div className={classes.text}>
          <div>
            <Link
              to="/staff/addstaff"
              className="Link btn btn-white btn-animate"
            >
              Thêm nhân viên
            </Link>
          </div>
          <div className={classes.find}>
            <div className={classes.col1}>
              <input
                className={classes.find1}
                type="text"
                id="find"
                name="find"
                placeholder="Mã nhân viên, tên nhân viên, email, số điện thoại..."
              />
              <div className={classes.focusborder}></div>
            </div>
            <div className={classes.find21}>
              <img src={seach} className={classes.find2} />
            </div>
          </div>
          <div className={classes.tablerecru}>
            <table className={classes.tablerecruitem}>
              <tr className={classes.tr}>
                <th
                  className={`${classes.th} ${classes.td1}`}
                  style={{ width: "90px" }}
                >
                  MNV
                </th>
                <th className={classes.th} style={{ width: "210px" }}>
                  Tên nhân viên
                </th>
                <th className={classes.th} style={{ width: "130px" }}>
                  Số điện thoại
                </th>
                <th className={classes.th} style={{ width: "190px" }}>
                  Email
                </th>
                <th className={classes.th} style={{ width: "190px" }}>
                  Tên đăng nhập
                </th>
                <th className={classes.th} style={{ width: "180px" }}>
                  Ngày bắt đầu làm việc
                </th>
                <th className={classes.th} style={{ width: "185px" }}>
                  Trạng thái
                </th>
              </tr>
              {listData.map((item) => {
                return (
                  <tr className={classes.tr1} key={item._id}>
                    <td className={classes.td1}></td>
                    <td className={classes.td2}>
                      <Link
                        to="/staff/inforstaff"
                        className="Link"
                        key={item._id}
                      >
                        {item.userName}
                      </Link>
                    </td>
                    <td className={classes.td3}>{item.phoneNumber}</td>
                    <td className={classes.td4}>{item.email}</td>
                    <td className={classes.td4}>{item.accountName}</td>
                    <td className={classes.td5}>{item.workDate}</td>
                    <td className={classes.td6}>
                      <span>
                        {" "}
                        {item.status == "true" ? (
                          <ServiceActivePoint />
                        ) : (
                          <ServiceUnactivePoint />
                        )}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </table>
            <div className={classes.newpage}>
              <ReactPaginate
                previousLabel={<img src={pastpage} />}
                nextLabel={<img src={nextpage} />}
                pageCount={10}
                // onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Liststaff;
