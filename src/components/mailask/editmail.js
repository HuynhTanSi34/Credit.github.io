import "../UI/style.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "react-dropdown/style.css";
import classes from "../UI/MailaskModule/editmail.module.css";
import Avatar from "../dashboard/avatar.js";
import List from "../listDashboard/listDashboard";
import axiosClient from "../api/axiosClient";
import letterApi from "../api/letterApi";

function Editmail() {
  const [listData, setListData] = useState([]);
  const { id } = useParams();
  const [answer, setAnswer] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(answer);
    try {
      const userAdd = await axiosClient.patch(`advice-letter/${id}`, {
        status: answer,
      });
      console.log(userAdd.data);
    } catch (error) {
      console.log("lỗi r m");
    }
  };
  useEffect(() => {
    document.title = "Nội dung";
    const fetchUser = async () => {
      const userList = await letterApi.getAll();
      const userGet = await axiosClient
        .get(`advice-letter/${id}`)
        .then((response) => {
          setListData(response.data);
          console.log(response);
        });
      // const userAdd = await axiosClient
      //   .post(`advice-letter/${id}`, {
      //     status: answer,
      //   })
      //   .then((res) => {
      //     setPosts([res.data, ...posts]);
      //     console.log(res.data);
      //   });
      // setAnswer("");
      // console.log(answer);
      // const handleSubmit = (e) => {
      //   e.preventDefault();
      //   userAdd(answer);
      // };
      // console.log(id);
      // console.log(userGet);
    };
    fetchUser();
  }, []);
  return (
    <div className="screen">
      <section className={classes.list}>
        <List />
      </section>
      <section className={classes.content}>
        <div className={classes.title}>
          <div className={classes.title1}>Nội dung chi tiết</div>
          <Avatar />
        </div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.text}>
            <div>
              <table className={classes.tableform}>
                <tr>
                  <td>
                    <label for="name" className={classes.label}>
                      Họ và tên
                    </label>
                  </td>
                  <td className={classes.td1}>Võ Kim Ngưu</td>
                </tr>
                <tr>
                  <td>
                    <label for="email" className={classes.label}>
                      Email gửi
                    </label>
                  </td>
                  <td className={classes.td1}>{listData.email}</td>
                </tr>

                <tr>
                  <td>
                    <label for="salary" className={classes.label}>
                      Thời gian gửi
                    </label>
                  </td>
                  <td className={classes.td1}>{listData.sendDate}</td>
                </tr>
                <tr>
                  <td>
                    <label for="note" className={classes.label}>
                      Nội dung
                    </label>
                  </td>
                  <td className={classes.td2}>{listData.content}</td>
                </tr>
              </table>
            </div>
          </div>
          <div className={classes.select}>
            <div className={classes.label}>Trạng thái</div>
            <label>
              <input
                type="radio"
                name="status"
                value="false"
                onChange={(e) => setAnswer(e.target.value)}
              />
              Chưa phản hồi
            </label>
            <label>
              <input
                type="radio"
                name="status"
                value="true"
                onChange={(e) => setAnswer(e.target.value)}
              />
              Đã phản hồi
            </label>
          </div>
          <div className={classes.buttonsub}>
            <Link to="/mailask/listmail" className="Link">
              <button className={classes.buttonsub1}>Quay lại</button>
            </Link>
            <Link to="/mailask/listmail" className="Link">
              <input
                type="submit"
                value="Lưu thay đổi"
                className={classes.buttonsub3}
              />
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
}
export default Editmail;
