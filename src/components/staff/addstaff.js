import "../UI/style.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "../UI/StaffModule/addstaff.module.css";
import Avatar from "../dashboard/avatar.js";
import Dropdown from "react-dropdown";
import List from "../listDashboard/listDashboard";
function Addstaff() {
  useEffect(() => {
    document.title = "Thêm nhân viên";
  });
  const options = ["Kế toán", "HR", "Sale"];
  const defaultOption = options[0];
  return (
    <div className="screen">
      <section className={classes.list}>
        <List />
      </section>
      <section className={classes.content}>
        <div className={classes.title}>
          <div className={classes.title1}>Thêm thông tin nhân viên</div>
          <Avatar />
        </div>
        <form className={classes.form}>
          <div className={classes.text}>
            <table className={classes.tableform}>
              <tr>
                <td>
                  <label for="name" className={classes.label}>
                    Họ và tên
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={classes.input}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="mnv" className={classes.label}>
                    Mã nhân viên
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="mnv"
                    name="mnv"
                    className={classes.input}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="cccd" className={classes.label}>
                    CCCD/CMND
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="cccd"
                    name="cccd"
                    className={classes.input}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="birthday" className={classes.label}>
                    Ngày tháng năm sinh
                  </label>
                </td>
                <td>
                  <input
                    type="date"
                    id="birthday"
                    name="birthday"
                    className={classes.input22}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="number" className={classes.label}>
                    Số điện thoại
                  </label>
                </td>
                <td>
                  <input
                    type="type"
                    id="number"
                    name="number"
                    className={classes.input}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="email" className={classes.label}>
                    Email
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className={classes.input}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="user" className={classes.label}>
                    Tên đăng nhập
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="user"
                    name="user"
                    className={classes.input}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="password" className={classes.label}>
                    Mật khẩu
                  </label>
                </td>
                <td>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={classes.input}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="start" className={classes.label}>
                    Ngày bắt đầu công việc
                  </label>
                </td>
                <td>
                  <input
                    type="date"
                    id="start"
                    name="start"
                    className={classes.input22}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="role" className={classes.label}>
                    Vị trí
                  </label>
                </td>
                <td>
                  <Dropdown
                    options={options}
                    // onChange={(e) => handleDropdownValue(e)}
                    value={defaultOption}
                    placeholder="Select an option"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="status" className={classes.label}>
                    Trạng thái làm việc
                  </label>
                </td>
                <td>
                  <div className={classes.td61}>
                    <div className={classes.circlegreen}></div>
                    <div>Đang làm việc</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="salary" className={classes.label}>
                    Lương
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="salary"
                    name="salary"
                    className={classes.input}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="note" className={classes.label}>
                    Ghi chú (Nếu có)
                  </label>
                </td>
                <td>
                  <input
                    className={classes.input1}
                    type="text"
                    id="note"
                    name="note"
                  />
                </td>
              </tr>
            </table>
          </div>
          <div className={classes.buttonsub}>
            <Link to="/dashboard/dashboard" className="Link">
              <button className={classes.buttonsub1}>Hủy</button>
            </Link>
            <button className={classes.buttonsub2}>Lưu nháp</button>
            <Link to="/staff/liststaff" className="Link">
              <input type="submit" value="Lưu" className={classes.buttonsub3} />
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
}
export default Addstaff;
