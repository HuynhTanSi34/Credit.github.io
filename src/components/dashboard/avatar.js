import "../UI/style.css";
import classes from "../UI/DashboardModule/profile.module.css";
import man from "../image/man.png";
import user from "../image/user.png";
import enter from "../image/enter.png";
import { useState } from "react";
import { Link } from "react-router-dom";
function Avatar() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)} className={classes.but}>
        <img src={man} alt="lỗi" className={classes.avamini} />
        {show && (
          <div className={classes.dropava}>
            <Link to="/dashboard/profile" className="Link">
              <div className={classes.dropava0}>
                <img src={user} alt="lỗi" className={classes.avamini1} />
                <div>Profile</div>
              </div>
            </Link>

            <Link to="/login" className="Link">
              <div className={classes.dropava0}>
                <img src={enter} alt="lỗi" className={classes.avamini1} />
                Logn out
              </div>
            </Link>
          </div>
        )}
      </button>
    </div>
  );
}
export default Avatar;
