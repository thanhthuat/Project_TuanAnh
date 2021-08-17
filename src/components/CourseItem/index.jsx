import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

import { NavLink } from "react-router-dom";

class CourseItem extends Component {
  render() {
    const { hinhAnh, tenKhoaHoc, moTa, maKhoaHoc } = this.props.item;
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            style={{ height: 200 }}
            image={hinhAnh}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {tenKhoaHoc}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {moTa.substr(0, 50) + "..."}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <NavLink to={`/detail/${maKhoaHoc}`}>
            <Button size="small" color="primary">
              Chi tiết
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    );
  }
}

export default CourseItem;
