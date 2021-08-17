import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  withStyles,
} from "@material-ui/core";
import { ImportContacts } from "@material-ui/icons";
import { connect } from "react-redux";
import { styles } from "./style";
import { Fragment } from "react";

class Header extends Component {
  render() {
    const { title, navLink, activeNavLink } = this.props.classes;
    console.log(this.props.classes);
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <ImportContacts />
          </IconButton>
          <Typography className={title} variant="h6">
            E-learning
          </Typography>
          <NavLink
            activeClassName={activeNavLink}
            className={navLink}
            exact
            to="/"
          >
            Home
          </NavLink>
          {this.props.me ? (
            <span className={`${navLink} ${activeNavLink}`}>Hello, {this.props.me.hoTen} </span>
          ) : (
            <Fragment>
              <NavLink
                activeClassName={activeNavLink}
                className={navLink}
                to="/signin"
              >
                Sign in
              </NavLink>
              <NavLink
                activeClassName={activeNavLink}
                className={navLink}
                to="/signup"
              >
                Sign up
              </NavLink>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => ({
  me: state.me,
});

export default connect(mapStateToProps)(withStyles(styles)(Header));
