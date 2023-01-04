import "../UI/style.css";
import { useEffect } from "react";
import classes from "../UI/LoginModule/remake.module.css";
import logoLogin from "../image/logoLogin.png";
import { Link } from "react-router-dom";
function Remake() {
  useEffect(() => {
    document.title = "Đăng nhập";
  });
  return (
    <div className="screen">
      <div className={classes.under}>
        <div className={classes.logo}>
          <img src={logoLogin} alt="Lỗi" className={classes.logoin} />
        </div>
        <div className={classes.form}>
          <form>
            <div className={classes.user}>
              <div className={classes.nameinput}>Nhập mật khẩu mới</div>
              <input
                type="password"
                placeholder="Password"
                className={classes.use}
              />
            </div>
            <div className={classes.pass}>
              <div className={classes.nameinput}>Xác nhận mật khẩu mới</div>
              <input
                id="password"
                placeholder="New password"
                className={classes.pas}
                type="password"
              />
            </div>

            <div>
              <Link to="/dashboard/profile" className={classes.Link}>
                <button className={classes.submit1}>
                  <div className={classes.ts}>Xác nhận</div>
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Remake;
