import React, { Component, Fragment } from "react";
import Header from "../../components/Header";
import { Container, TextField, Button, withStyles } from "@material-ui/core";
import styles from "./style";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        email: "",
        maNhom: "GP01",
      },
    };
  }
  // bắt sự kiện người dùng nhập vào input, get value và cập nhật state tương ứng
  handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    this.setState({
      formValue: {
        ...this.state.formValue,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: this.state.formValue,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log({ ...err });
      });
  };

  handleSetDefaultUser = () => {
    this.setState({
      formValue: {
        taiKhoan: "trunghieu123",
        matKhau: "123123123",
        hoTen: "dang trung hieu",
        soDT: "128309123809",
        email: "trunghieu@gmail.com",
        maNhom: "GP01",
      },
    });
  };

  render() {
    const { formInput } = this.props.classes;
    return (
      <Fragment>
        <Header />
        <Container maxWidth="sm">
          <h1>Đăng Ký</h1>
          <form onSubmit={this.handleSubmit}>
            <div className={formInput}>
              <TextField
                //set value để đưa giá trị của state hiện lên trên input
                value={this.state.formValue.taiKhoan}
                name="taiKhoan"
                onChange={this.handleChange}
                fullWidth
                label="Tài khoản"
                variant="outlined"
              />
            </div>
            <div className={formInput}>
              <TextField
                value={this.state.formValue.matKhau}
                name="matKhau"
                onChange={this.handleChange}
                fullWidth
                label="Mật khẩu"
                variant="outlined"
              />
            </div>
            <div className={formInput}>
              <TextField
                name="hoTen"
                value={this.state.formValue.hoTen}
                onChange={this.handleChange}
                fullWidth
                label="Họ Tên"
                variant="outlined"
              />
            </div>
            <div className={formInput}>
              <TextField
                value={this.state.formValue.email}
                name="email"
                onChange={this.handleChange}
                fullWidth
                label="Email"
                variant="outlined"
              />
            </div>
            <div className={formInput}>
              <TextField
                name="soDT"
                value={this.state.formValue.soDT}
                onChange={this.handleChange}
                fullWidth
                label="Số ĐT"
                variant="outlined"
              />
            </div>
            <div>
              <Button type="submit" variant="contained" color="primary">
                Đăng Ký
              </Button>
              <Button
                onClick={this.handleSetDefaultUser}
                type="button"
                variant="contained"
                color="secondary"
              >
                Set default user
              </Button>
            </div>
          </form>
        </Container>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Signup);
