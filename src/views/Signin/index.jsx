import { Container, TextField, Button } from "@material-ui/core";
import React, { Component } from "react";
import Header from "../../components/Header";
import { signIn } from "../../store/actions/auth";
import { connect } from "react-redux";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: {
        taiKhoan: "",
        matKhau: "",
      },
    };
  }

  handleChange = (event) => {
    this.setState({
      formValue: {
        ...this.state.formValue,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(
      signIn(this.state.formValue, () => {
        this.props.history.push("/");
      })
    );
  };

  render() {
    return (
      <div>
        <Header />
        <div>
          <h1 style={{ textAlign: "center" }}>Đăng Nhập</h1>
          <Container maxWidth="sm">
            <form onSubmit={this.handleSubmit}>
              <div style={{ marginBottom: 30 }}>
                <TextField
                  name="taiKhoan"
                  onChange={this.handleChange}
                  fullWidth
                  label="Tài khoản"
                  variant="outlined"
                />
              </div>
              <div style={{ marginBottom: 30 }}>
                <TextField
                  onChange={this.handleChange}
                  name="matKhau"
                  fullWidth
                  label="Mật khẩu"
                  variant="outlined"
                />
              </div>

              <div>
                <Button type="submit" variant="contained" color="primary">
                  Đăng Nhập
                </Button>

                <Button type="button" variant="contained" color="secondary">
                  Set Default user
                </Button>
              </div>
            </form>
          </Container>
        </div>
      </div>
    );
  }
}

export default connect()(Signin);
