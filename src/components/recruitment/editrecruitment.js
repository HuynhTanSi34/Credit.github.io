import "../UI/style.css";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import classes from "../UI/RecruitmentModule/addrecru.module.css";
import Avatar from "../dashboard/avatar.js";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import List from "../listDashboard/listDashboard";
import recrumentApi from "../api/recrumentApi";
import axiosClient from "../api/axiosClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Editrecru() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [validate, setValidate] = useState([]);
  const [data, setData] = useState({
    title: "",
    detailWork: "",
    workList: "",
    note: "",
  });
  const handleSubmit = async (event) => {
    console.log(data);
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
        const userAdd = await axiosClient.patch(`recruitment/${id}`, data);
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
        setTimeout(() => navigate("/recruitment/listrecruitment"), 2000);
      } catch (error) {
        console.log("lỗi r m");
      }
    } else {
      console.log(temp);
      setValidate(temp);
      return;
    }
  };
  useEffect(() => {
    document.title = "Sửa tin tuyển dụng";
    const fetchUser = async () => {
      const userList = await recrumentApi.getAll();
      const userGet = await axiosClient.get(`recruitment/${id}`);
      setData({
        title: userGet.data.title,
        detailWork: userGet.data.detailWork,
        workList: userGet.data.workList,
        note: userGet.data.note,
      });
    };
    fetchUser();
    console.log(data);
  }, [id]);
  return (
    <>
      <div className="screen">
        <section className={classes.list}>
          <List />
        </section>
        <section className={classes.content}>
          <div className={classes.title}>
            <div className={classes.title1}>Sửa tin tuyển dụng</div>
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
                      defaultValue={data.title}
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
                    <label for="name" className={classes.label}>
                      Vị trí công việc
                    </label>
                  </td>
                  <td>
                    <input
                      className={classes.input1}
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Tên công việc.."
                      defaultValue={data.workList}
                      onChange={(e) =>
                        setData({ ...data, workList: e.target.value })
                      }
                    />
                    {validate.workList == true ? (
                      <p className={classes.p}>*Mục này không được để trống</p>
                    ) : (
                      <p className={classes.p}></p>
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label for="write" className={classes.label}>
                      Mô tả công việc
                    </label>
                  </td>
                  <td style={{ width: "300px" }}>
                    <CKEditor
                      editor={ClassicEditor}
                      data={data.detailWork}
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
                      defaultValue={data.note}
                      onChange={(e) =>
                        setData({ ...data, note: e.target.value })
                      }
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div className={classes.buttonsub}>
              <Link to="/recruitment/listrecruitment" className="Link">
                <button className={classes.buttonsub1}>Hủy</button>
              </Link>
              <button className={classes.buttonsub3} onClick={handleSubmit}>
                Lưu
              </button>
            </div>
          </form>
        </section>
      </div>
      <ToastContainer />
    </>
  );
}
export default Editrecru;
