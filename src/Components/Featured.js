import { Container, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { movies, NewReleases, FeaturedCasts } from "../data/movies.js";
import MovieCard from "./MovieCard.js";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Featured = () => {
  console.log(movies);
  return (
    <Container maxWidth="lg" sx={{ marginTop: "30px" }}>
      <Typography variant="h5" gutterBottom sx={{ marginTop: "30px" }}>
        Featured Movie
      </Typography>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {movies.map((movie) => (
          <MovieCard film={movie} key={movie.filmNo} />
        ))}
      </Carousel>

      <div className="mt-5">
        <Typography variant="h5" gutterBottom sx={{ marginTop: "30px" }}>
          Exclusive Videos
        </Typography>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          sx={{ paddingTop: "40px" }}
        >
          {NewReleases.map((movie) => (
            <MovieCard film={movie} key={movie.filmNo} />
          ))}
        </Carousel>
      </div>
      <div className="mb-5">
        <Typography variant="h5" gutterBottom sx={{ marginTop: "30px" }}>
          Featured Casts
        </Typography>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          centerMode={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          sx={{ paddingTop: "40px" }}
        >
          {FeaturedCasts.map((movie) => (
            <MovieCard film={movie} key={movie.filmNo} />
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default Featured;
