import React from "react";
import { useRouteMatch } from "react-router-dom";
import { useFetch } from "../../customHooks/useFetch";
import { userId } from "../../url";
import Spinner from "../Spinner/Spinner";
import MovieCard from "../MovieCard/MovieCard";
import MoviePlayer from "../MoviePlayer/MoviePlayer";
import Error from "../Error/Error";
import classes from "./Movie.module.css";

const Movie = () => {
  const match = useRouteMatch("/movies/:movieId");
  const { movieId } = match.params;

  const [data, loading, error] = useFetch(`/show/${movieId}?user=${userId}`);

  const { countries_str, description, files, genres_str, title, year } =
    data?.movie || {};

  const videoUrl =
    data?.movie?.files?.video_sd?.video_url ||
    data?.movie?.files?.video_hd?.video_url ||
    data?.movie?.files?.video_4k?.video_url ||
    data?.movie?.files?.video_3d?.video_url;

  return loading ? (
    <Spinner />
  ) : error ? (
    <Error>{error.message}</Error>
  ) : (
    <div className={classes.container}>
      <div className={classes.player}>
        <MoviePlayer url={videoUrl} />
      </div>
      {!videoUrl && (
        <p style={{ color: "red", fontSize: "1.5rem", textAlign: "center" }}>
          URL is not provided
        </p>
      )}
      <MovieCard
        title={title}
        description={description}
        image={files.poster_url}
        year={year}
        genres={genres_str}
        countries={countries_str}
      />
    </div>
  );
};

export default Movie;
