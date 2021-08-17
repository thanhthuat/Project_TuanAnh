import React, { Component } from "react";
import { fetchCourse } from "../../store/actions/course";
import { connect } from "react-redux";
import Layout from "../../HOCs/Layout";

class Detail extends Component {
  render() {
    const { hinhAnh, tenKhoaHoc } = this.props.course || {};
    return (
      <Layout>
        <h1>DETAIL PAGE</h1>
        <h1>{tenKhoaHoc}</h1>
        <img src={hinhAnh} alt="course" />
      </Layout>
    );
  }

  componentDidMount() {
    //lấy tham số id từ trên url thông props "match"
    const courseId = this.props.match.params.id;

    this.props.dispatch(fetchCourse(courseId));

    // 1. tạo dữ liệu mới trên store courseDetail
    // 2.tạo async action fetchCourse()
    // 3.dispatch async action
    // 4. lên reducer ,xử lý action (action creator, tạo type)
    // 5. ở component Detail, connect lên store, lấy courseDetail
    // 6. Hiện hình , tên khoá, mô tả, tên người tạo
  }
}

const mapStateToProps = (state) => ({
  course: state.course.courseDetail,
});

export default connect(mapStateToProps)(Detail);
