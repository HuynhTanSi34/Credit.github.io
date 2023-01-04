import "../UI/style.css";
import { useEffect } from "react";
import classes from "../UI/LoginModule/forgot.module.css";
import logoLogin from "../image/logoLogin.png";
import { Link } from "react-router-dom";
function Forgot() {
  useEffect(() => {
    document.title = "Xác nhận thông tin";
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
              <div className={classes.nameinput}>Nhập địa chỉ email</div>
              <input type="text" placeholder="Email" className={classes.use} />
            </div>
            <div className={classes.wrong}>
              *Địa chỉ email được cung cấp bởi công ty
            </div>
            <div className={classes.forgot}>*Kiểm tra email</div>
            <br />
            <div>
              <Link to="/login/remake" className={classes.Link}>
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
export default Forgot;
