import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const MovieCard = (props) => {
  const {
    filmType,
    poster,
    country,
    year,
    current,
    title,
    imdbRating,
    rottenTomatoes,
    genre,
  } = props.film;
  return (
    <Card>
      <CardContent>
        <CardMedia>
            <img src={poster} alt={title} />
        </CardMedia>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h6">{filmType}</Typography>
        <Typography variant="h6">{country}</Typography>
        <Typography variant="h6">{year}</Typography>
        <Typography variant="h6">{current}</Typography>
        <Typography variant="h6">{imdbRating}</Typography>
        <Typography variant="h6">{rottenTomatoes}</Typography>
        <Typography variant="h6">{genre}</Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
