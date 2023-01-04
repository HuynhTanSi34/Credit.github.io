import "../UI/style.css";
import { useEffect } from "react";
import classes from "../UI/DashboardModule/profile.module.css";
import man from "../image/man.png";
import edit from "../image/edit.png";
import Avatar from "./avatar.js";
import List from "../listDashboard/listDashboard";
function Profile() {
  useEffect(() => {
    document.title = "My Profile";
  });
  return (
    <div className="screen">
      <section className={classes.list}>
        <List />
      </section>
      <section className={classes.content}>
        <div className={classes.title}>
          <div className={classes.title1}>My profile</div>

          <Avatar />
        </div>
        <div className={classes.text}>
          <div className={classes.ima}>
            <img src={man} alt="lỗi" className={classes.ima1} />
            <img src={edit} alt="lỗi" className={classes.ima2} />
          </div>
          <div className={classes.in4}>
            <table className={classes.table}>
              <tr className={classes.tr0}>
                <td>Họ và tên</td>
                <td className={classes.td1}>Lê Văn Hửm</td>
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
                <td>Lương</td>
                <td className={classes.td1}>10.000.000</td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Profile;
