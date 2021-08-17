import { createAction } from ".";
import { request } from "../../api/request";
import { actionType } from "./type";

//async action
export const fetchCourses = (dispatch) => {
  //side-effect : hành động nhằm thay đổi 1 state nằm ngoài scope của function
  request({
    method: "GET",
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
  })
    .then((res) => {
      dispatch(createAction(actionType.SET_COURSES, res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchCourse = (id) => {
  return (dispatch) => {
    request({
      method: "GET",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc",
      params: {
        maKhoaHoc: id,
      },
    })
      .then((res) => {
        //dispatch action lên store, gửi detail lên lưu lại
        dispatch(createAction(actionType.SET_COURSE, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
