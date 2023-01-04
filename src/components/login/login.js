import "../UI/style.css";
import { useEffect, useState } from "react";
import classes from "../UI/LoginModule/login.module.css";
import logoLogin from "../image/logoLogin.png";
import show from "../image/show.png";
import hidden from "../image/hidden.png";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { Link } from "react-router-dom";
function Login() {
  useEffect(() => {
    document.title = "Đăng nhập";
  });
  const [hid, setHid] = useState(false);
  const showPass = () => {
    var pswrd = document.getElementById("pswrd");
    var icon = document.querySelector(".fas");
    if (pswrd.type === "password") {
      pswrd.type = "text";
    } else {
      pswrd.type = "password";
    }
  };
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
                id="pswrd"
                placeholder="Password"
                className={classes.pas}
                type="password"
              />
              <div
                className={classes.showP}
                onClick={() => showPass() && setHid(!hid)}
              >
                {!hid && <img src={show} className={classes.iconshow} />}
                {hid && <img src={hidden} className={classes.iconshow} />}
              </div>
            </div>
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
              <Link to="/login/forgot" className="Link">
                Quên mật khẩu?
              </Link>
            </div>
            <br />
            <Link to="/dashboard/dashboard" className="Link">
              <div>
                <button className={classes.submit1}>
                  <div className={classes.ts}>Đăng nhập</div>
                </button>
              </div>
            </Link>
          </form>
          {/* <div className="form">
            <input
              type="text"
              className={classes.use}
              name="text"
              autocomplete="off"
              required
            />
            <label for="text" className="label-name">
              <span className="content-name">Tên đăng nhập</span>
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Login;
