import "../UI/style.css";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link, useParams } from "react-router-dom";
import classes from "../UI/MailaskModule/listask.module.css";
import seach from "../image/seach.png";
import pastpage from "../../components/image/pastpage.png";
import nextpage from "../../components/image/nextpage.png";
import Avatar from "../dashboard/avatar.js";
import List from "../listDashboard/listDashboard";
import axiosClient from "../api/axiosClient";
import letterApi from "../api/letterApi";
function Listask() {
  const [listData, setListData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    document.title = "Hộp thư hỏi đáp";
    const fetchUser = async () => {
      const userList = await letterApi.getAll();
      // console.log(userList);
      const userGet = await axiosClient
        .get("advice-letter/?limit=50&page=1")
        .then((response) => {
          setListData(response.data.data);
        });
      // console.log(userGet);
    };
    fetchUser();
  }, []);

  const [pageNumber, setPageNumber] = useState(0);
  const usersPrePage = 9;
  const pagesVisited = pageNumber * usersPrePage;
  // const changePage = ({ selected }: { selected: any }) => {
  //   setPageNumber(selected);
  // };
  return (
    <div className="screen">
      <section className={classes.list}>
        <List />
      </section>
      <section className={classes.content}>
        <div className={classes.title}>
          <div className={classes.title1}>Danh sách các email thắc mắc</div>
          <Avatar />
        </div>
        <div className={classes.text}>
          <div className={classes.find}>
            <div className={classes.col1}>
              <input
                className={classes.find1}
                type="text"
                id="find"
                name="find"
                placeholder="ID, email, số điện thoại, trạng thái..."
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
                <th className={classes.th} style={{ width: "60px" }}>
                  ID
                </th>
                <th className={classes.th} style={{ width: "250px" }}>
                  Nội dung
                </th>
                <th className={classes.th} style={{ width: "200px" }}>
                  Họ và tên
                </th>
                <th className={classes.th} style={{ width: "200px" }}>
                  Email
                </th>
                <th className={classes.th} style={{ width: "120px" }}>
                  Số điện thoại
                </th>
                <th className={classes.th} style={{ width: "210px" }}>
                  Thời gian
                </th>
                <th className={classes.th} style={{ width: "150px" }}>
                  Trạng thái
                </th>
              </tr>
              {listData.map((item) => {
                return (
                  <tr className={classes.tr1} key={item._id}>
                    <td className={classes.td2}>EM01</td>
                    <td className={classes.td3}>
                      <Link
                        to={"/mailask/editmail/" + item._id}
                        className="Link"
                      >
                        <div className={classes.con1}>{item.content}</div>
                      </Link>
                    </td>
                    <td className={classes.td31}>Hứa Văn Cao</td>
                    <td className={classes.td4}>{item.email}</td>
                    <td className={classes.td41}>{item.phoneNumber}</td>
                    <td className={classes.td5}>{item.sendDate}</td>
                    <td className={classes.td6}>
                      {item.status == "true" ? "Đã phản hồi" : "Chưa phản hồi"}
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
export default Listask;
