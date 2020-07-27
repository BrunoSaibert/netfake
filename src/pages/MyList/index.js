import React, { useState, useEffect } from 'react';

// import Slider from 'react-slick';

import CardMovie from '../../components/CardMovie';

import * as S from './styles';

const apiKey = 'e5693481ef000bfdd855a0f21ad39631';

function MyList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies('popular');
  }, []);

  const getMovies = type => {
    fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=pt-BR`
    )
      .then(response => response.json())
      .then(response => {
        setMovies(response.results);
      });
  };

  // const settings = {
  //   className: 'movies',
  //   dots: false,
  //   infinite: false,
  //   slidesToShow: 1,
  //   rows: 100,
  //   slidesPerRow: 6,

  //   responsive: [
  //     {
  //       breakpoint: 1400,
  //       settings: {
  //         slidesPerRow: 5,
  //       },
  //     },
  //     {
  //       breakpoint: 1100,
  //       settings: {
  //         slidesPerRow: 4,
  //       },
  //     },
  //     {
  //       breakpoint: 800,
  //       settings: {
  //         slidesPerRow: 3,
  //       },
  //     },
  //   ],
  // };

  return (
    <S.Container>
      <h1>My list</h1>

      <S.MovieList>
        {movies.map(({ id, title, overview, backdrop_path }) => (
          <CardMovie
            key={id}
            id={id}
            title={title}
            overview={overview}
            img={backdrop_path}
          />
        ))}
      </S.MovieList>
      {/* <Slider {...settings}>
        {movies.map(({ id, title, overview, backdrop_path }) => (
          <CardMovie
            key={id}
            id={id}
            title={title}
            overview={overview}
            img={backdrop_path}
          />
        ))}
      </Slider> */}
    </S.Container>
  );
}

export default MyList;
