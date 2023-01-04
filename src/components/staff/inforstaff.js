import "../UI/style.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "../UI/StaffModule/inforstaff.module.css";
import man from "../image/man.png";
import Avatar from "../dashboard/avatar.js";
import List from "../listDashboard/listDashboard";
import userApi from "../api/userApi";
import axiosClient from "../api/axiosClient";
function Inforstaff() {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    document.title = "Chi tiết";
    const fetchUser = async () => {
      const userList = await userApi.getAll();
      // console.log(userList);
      const userGet = await axiosClient.get("user").then((response) => {
        setListData(response.data);
      });
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
          <div className={classes.title1}>Thông tin nhân viên</div>
          <Avatar />
        </div>
        <div className={classes.text}>
          <div className={classes.ima}>
            <img src={man} alt="lỗi" className={classes.ima1} />
          </div>
          <div className={classes.in4}>
            <table className={classes.table}>
              <tr className={classes.tr0}>
                <td>Họ và tên</td>
                <td className={classes.td1}>Lê Văn Hửm</td>
              </tr>
              <tr className={classes.tr0}>
                <td>Mã nhân viên</td>
                <td className={classes.td1}>NV03</td>
              </tr>
              <tr className={classes.tr0}>
                <td>CMND/CCCD</td>
                <td className={classes.td1}>123456789</td>
              </tr>
              <tr className={classes.tr0}>
                <td className={classes.td0}>Ngày tháng năm sinh</td>
                <td className={classes.td1}>25/12/1995</td>
              </tr>
              <tr className={classes.tr0}>
                <td>Số điện thoại</td>
                <td className={classes.td1}>333333333</td>
              </tr>
              <tr className={classes.tr0}>
                <td>Email</td>
                <td className={classes.td1}>hmmm@gmail.com</td>
              </tr>
              <tr className={classes.tr0}>
                <td>Tên đăng nhập</td>
                <td className={classes.td1}>levan95</td>
              </tr>
              <tr className={classes.tr0}>
                <td>Mật khẩu</td>
                <td className={classes.td1}>*********</td>
              </tr>
              <tr className={classes.tr0}>
                <td>Ngày bắt đầu làm việc</td>
                <td className={classes.td1}>01/01/2022</td>
              </tr>
              <tr className={classes.tr0}>
                <td>Vị trí</td>
                <td className={classes.td1}>Kế Toán</td>
              </tr>
              <tr className={classes.tr0}>
                <td>Trạng thái làm việc</td>
                <td className={classes.td1}>
                  <div className={classes.td61}>
                    <div className={classes.circlegreen}></div>
                    <div>Đang làm việc</div>
                  </div>
                </td>
              </tr>
              <tr className={classes.tr0}>
                <td>Lương</td>
                <td className={classes.td1}>10.000.000 VNĐ</td>
              </tr>
              <tr className={classes.tr0}>
                <td>Lần đăng nhập cuối cùng</td>
                <td className={classes.td1}>10:25:58 - 21/10/2022</td>
              </tr>
            </table>
          </div>
        </div>
        <div className={classes.buttonsub}>
          <Link to="/staff/liststaff" className="Link">
            <button className={classes.buttonsub1}>Quay lại</button>
          </Link>
          <Link to="/staff/editstaff" className="Link">
            <button className={classes.buttonsub2}>Sửa</button>
          </Link>
          <Link to="/staff/inforstaff" className="Link">
            <button className={classes.buttonsub3}>Tiếp theo</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
export default Inforstaff;
