import "../UI/style.css";
import { useEffect } from "react";
import classes from "../UI/LoginModule/errpass.module.css";
import logoLogin from "../image/logoLogin.png";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { Link } from "react-router-dom";
function Err() {
  useEffect(() => {
    document.title = "Sai mật khẩu";
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
              <div className={classes.nameinput}>Tên đăng nhập</div>
              <input type="text" placeholder="User" className={classes.use} />
            </div>
            <div className={classes.pass}>
              <div className={classes.nameinput}>Mật khẩu</div>
              <input
                id="password"
                placeholder="Password"
                className={classes.pas}
                type="password"
              />
            </div>
            <div className={classes.wrong}>Sai tên đăng nhập hoặc mật khẩu</div>
            {/* <img
              src={eye}
              alt="Eye"
              className="eye"
              onChange={(e) => setShowpass(!showpass)}
              onClick={showw}
            /> */}
            <div className={classes.savepass}>
              <ToggleButtonGroup
                type="checkbox"
                defaultValue={1}
                className="mb-2"
              >
                <ToggleButton id="tbg-check-1" value={1}>
                  Ghi nhớ mật khẩu
                </ToggleButton>
              </ToggleButtonGroup>{" "}
            </div>

            <div className={classes.forgot}>
              <Link to="/login/forgot" className={classes.Link}>
                Quên mật khẩu?
              </Link>
            </div>
            <br />
            <div>
              {/* <Link to={path} className={classes.Link}> */}
              <button className={classes.submit1}>
                <div className={classes.ts}>Đăng nhập</div>
              </button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Err;
