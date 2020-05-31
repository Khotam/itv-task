import React from "react";
import ReactPlayer from "react-player";
import classes from "./MoviePlayer.module.css";

const MoviePlayer = ({ url }) => {
  return (
    <div className={classes.container}>
      <div className={classes.playerWrapper}>
        <ReactPlayer
          className={classes.reactPlayer}
          width="100%"
          height="100%"
          controls={true}
          playing={!url && true}
          url={url || "https://youtu.be/dQw4w9WgXcQ?t=43"}
        />
      </div>
    </div>
  );
};

export default MoviePlayer;
