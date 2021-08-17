import React, { Component } from "react";

import { Typography, Container, Grid } from "@material-ui/core";
import CourseItem from "../../components/CourseItem";
import { connect } from "react-redux";
import { fetchCourses } from "../../store/actions/course";
import Layout from "../../HOCs/Layout";

class Home extends Component {
  render() {
    return (
      <Layout>
        <Typography component="h1" variant="h3" align="center" gutterBottom>
          Danh sách khoá học
        </Typography>

        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {this.props.courses.map((item) => {
              return (
                <Grid xs={12} sm={6} md={3} item>
                  <CourseItem item={item} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Layout>
    );
  }

  componentDidMount() {
    //dispatch async action lên middleware, middleware sẽ run action
    this.props.dispatch(fetchCourses);
  }
}

const mapStateToProps = (state) => ({
  courses: state.course.courseList,
});

export default connect(mapStateToProps)(Home);
