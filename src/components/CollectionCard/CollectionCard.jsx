import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    maxWidth: 345,
  },
  title: {
    [breakpoints.up("sm")]: {
      textOverflow: "ellipsis",
      overflow: "hidden",
      maxWidth: "100%",
      whiteSpace: "nowrap",
    },
  },
  actions: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

function CollectionCard({
  item: {
    id,
    files: { poster_url },
    title,
    year,
  },
}) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Grid item lg={2} md={4} sm={6} xs={12} align="center">
      <Card className={classes.root}>
        <CardActionArea onClick={() => history.push(`/movies/${id}`)}>
          <CardMedia
            component="img"
            alt={title}
            height="auto"
            image={poster_url}
            title={title}
          />
          <CardContent>
            <Typography className={classes.title} gutterBottom variant="body1">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions}>
          <Typography className={classes.title} gutterBottom variant="body2">
            Year: {year}
          </Typography>
          <Link to={`/movies/${id}`}>
            <Button className={classes.btn} size="small" color="primary">
              Learn More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default CollectionCard;
