import { request } from "../../api/request";
import { createAction } from "./index";
import { actionType } from "./type";
export const signIn = (userLogin, callback) => {
  return (dispatch) => {
    request({
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: userLogin,
    })
      .then((res) => {
        dispatch(createAction(actionType.SET_ME, res.data));
        localStorage.setItem("t", res.data.accessToken);
        callback();
      })
      .catch((err) => {
        console.log({ ...err }, err.response.data);
        alert(err.response.data);
      });
  };
};

export const fetchMe = async (dispatch) => {
  try {
    const res = await request({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinNguoiDung",
    });

    dispatch(createAction(actionType.SET_ME, res.data));
  } catch (err) {
    console.log(err);
  }
};
