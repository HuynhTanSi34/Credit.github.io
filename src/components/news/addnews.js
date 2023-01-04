import "../UI/style.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "../UI/NewsModule/addnews.module.css";
import Avatar from "../dashboard/avatar.js";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import List from "../listDashboard/listDashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import newsApi from "../api/newsApi";
import axiosClient from "../api/axiosClient";
function Addnews() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Thêm tin tức";
    const fetchUser = async () => {
      const userList = await newsApi.getAll();
    };
    fetchUser();
  }, []);
  const [validate, setValidate] = useState([]);
  const [data, setData] = useState({
    title: "",
    detailWork: "",
    workList: "000",
    note: "",
    images: [
      "https://fecredit.com.vn/wp-content/uploads/2022/06/4-1024x683.jpg",
    ],
    poster: "637b3138ace0d994277b99f8",
  });
  const handleSubmit = async (event) => {
    let temp = {
      title: false,
      workList: false,
      detailWork: false,
    };
    let isvalid = false;
    if (data.title == "" || data.title == undefined) {
      temp.title = true;
      isvalid = true;
    } else {
      temp.title = false;
    }
    if (data.workList == "" || data.workList == undefined) {
      temp.workList = true;
      isvalid = true;
    } else {
      temp.workList = false;
    }
    if (data.detailWork == "" || data.detailWork == undefined) {
      temp.detailWork = true;
      isvalid = true;
    } else {
      temp.detailWork = false;
    }
    event.preventDefault();
    if (isvalid == false) {
      try {
        const userAdd = await axiosClient.post("news", data);
        console.log(userAdd.data);
        toast.success("Lưu thành công", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => navigate("/news/listnews"), 2000);
      } catch (error) {
        console.log("lỗi r m");
        console.log(data);
      }
    } else {
      console.log(temp);
      setValidate(temp);
      return;
    }
  };
  return (
    <>
      <div className="screen">
        <section className={classes.list}>
          <List />
        </section>
        <section className={classes.content}>
          <div className={classes.title}>
            <div className={classes.title1}>Thêm thông tin tức</div>
            <Avatar />
          </div>
          <form>
            <div className={classes.text}>
              <table className={classes.tableform}>
                <tr>
                  <td>
                    <label for="title" className={classes.label}>
                      Tiêu đề
                    </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Tên tiêu đề..."
                      className={classes.input}
                      onChange={(e) =>
                        setData({ ...data, title: e.target.value })
                      }
                    />
                    {validate.title == true ? (
                      <p className={classes.p}>*Mục này không được để trống</p>
                    ) : (
                      <p className={classes.p}></p>
                    )}
                  </td>
                </tr>

                <tr>
                  <td>
                    <label for="write" className={classes.label}>
                      Nội dung bài viết
                    </label>
                  </td>
                  <td className={classes.maxtd}>
                    <CKEditor
                      editor={ClassicEditor}
                      data=""
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                      }}
                      onChange={(event, editor) => {
                        const datae = editor.getData();
                        console.log(datae);
                        setData({ ...data, detailWork: datae });
                      }}
                    />
                    {validate.detailWork == true ? (
                      <p className={classes.p}>*Mục này không được để trống</p>
                    ) : (
                      <p className={classes.p}></p>
                    )}
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
                      placeholder="Ghi chú.."
                      onChange={(e) =>
                        setData({ ...data, note: e.target.value })
                      }
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div className={classes.buttonsub}>
              <Link to="/dashboard/dashboard" className="Link">
                <button className={classes.buttonsub1}>Hủy</button>
              </Link>
              <button
                type="submit"
                className={classes.buttonsub3}
                onClick={handleSubmit}
              >
                Lưu
              </button>
            </div>
          </form>
        </section>
      </div>
      <ToastContainer />{" "}
    </>
  );
}
export default Addnews;
