import "../UI/style.css";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import classes from "../UI/RecruitmentModule/listrecru.module.css";
import seach from "../image/seach.png";
import pastpage from "../../components/image/pastpage.png";
import nextpage from "../../components/image/nextpage.png";
import editing from "../../components/image/editing.png";
import dele from "../../components/image/delete.png";
import Avatar from "../dashboard/avatar.js";
import List from "../listDashboard/listDashboard";
import recrumentApi from "../api/recrumentApi";
import axiosClient from "../api/axiosClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Listrecru() {
  const [listData, setListData] = useState([]);
  const { id } = useParams();
  const [deleteData, setDeletedata] = useState("");
  const handleDelete = async (id) => {
    try {
      const userAdd = await axiosClient.delete(`recruitment/${id}`);
      console.log(userAdd.data);
      setDeletedata(userAdd.data);
      toast.success("Xóa thành công", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log("lỗi r m");
    }
  };
  useEffect(() => {
    document.title = "Danh sách bài viết tuyển dụng";
    const fetchUser = async () => {
      const userList = await recrumentApi.getAll();
      const userGet = await axiosClient
        .get("recruitment?limit=50&page=1")
        .then((response) => {
          setListData(response.data.data);
          console.log(response.data.total);
        });
    };
    fetchUser();
  }, [deleteData]);

  const [pageNumber, setPageNumber] = useState(0);
  const usersPrePage = 9;
  const pagesVisited = pageNumber * usersPrePage;
  return (
    <>
      <div className="screen">
        <section className={classes.list}>
          <List />
        </section>
        <section className={classes.content}>
          <div className={classes.title}>
            <div className={classes.title1}>Danh sách bài viết tuyển dụng</div>
            <Avatar />
          </div>
          <div className={classes.text}>
            <div>
              <Link
                to="/recruitment/addrecruitment"
                className="Link btn btn-white btn-animate"
              >
                Thêm tin tuyển dụng
              </Link>
            </div>
            <div className={classes.find}>
              <div className={classes.col1}>
                <input
                  className={classes.find1}
                  type="text"
                  id="find"
                  name="find"
                  placeholder="ID bài viết, tên bài đăng, người đăng, ngày đăng..."
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
                  <th className={classes.th} style={{ width: "74px" }}>
                    ID
                  </th>
                  <th className={classes.th} style={{ width: "450px" }}>
                    Tên bài viết
                  </th>
                  <th className={classes.th} style={{ width: "200px" }}>
                    Người đăng
                  </th>
                  <th className={classes.th} style={{ width: "200px" }}>
                    Email
                  </th>
                  <th className={classes.th} style={{ width: "180px" }}>
                    Ngày đăng
                  </th>
                  <th className={classes.th} style={{ width: "120px" }}></th>
                </tr>
                {listData.map((item) => {
                  return (
                    <tr className={classes.tr1} key={item._id}>
                      <td className={classes.td2}>TD1</td>
                      <td className={classes.td3}>
                        <div className={classes.con1}>{item.title}</div>
                      </td>
                      <td className={classes.td4}>Nguyễn Thái Hào</td>
                      <td className={classes.td4}>hali@gmail.com</td>
                      <td className={classes.td5}>
                        {moment(item.postDate).format("lll")}
                      </td>
                      <td className={classes.td6}>
                        <button title="Sửa" className={classes.butedit}>
                          <Link
                            to={"/recruitment/editrecruitment/" + item._id}
                            className="Link"
                          >
                            <img
                              src={editing}
                              alt="lỗi"
                              className={classes.tablemini1}
                            />
                          </Link>
                        </button>
                        <p></p>
                        <button
                          title="Xóa"
                          className={classes.butdelete}
                          onClick={() => handleDelete(item._id)}
                        >
                          <img
                            src={dele}
                            alt="lỗi"
                            className={classes.tablemini2}
                          />
                        </button>
                        {/* <button
                          className={classes.btntd}
                          onClick={() => clickHandler(item._id)}
                          onMouseLeave={() => disapperPopUp()}
                        >
                          ...
                          {show == item._id && (
                            <div className={classes.droptable}>
                              <Link
                                to={"/recruitment/editrecruitment/" + item._id}
                                className="Link"
                              >
                                <div className={classes.droptable0}>
                                  <div>Sửa</div>
                                  <img
                                    src={editing}
                                    alt="lỗi"
                                    className={classes.tablemini1}
                                  />
                                </div>
                              </Link>
                              <div
                                className={classes.droptable0}
                                onClick={() => handleDelete(item._id)}
                              >
                                Xóa
                                <img
                                  src={dele}
                                  alt="lỗi"
                                  className={classes.tablemini1}
                                />
                              </div>
                            </div>
                          )}
                        </button> */}
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
      <ToastContainer />
    </>
  );
}
export default Listrecru;
