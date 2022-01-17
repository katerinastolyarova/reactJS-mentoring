import React, { Suspense, useState } from 'react';
import './App.scss';

const Header = React.lazy(() => import('./Containers/Header'));
const Container = React.lazy(() => import('./Containers/Container/Container'));
const Footer = React.lazy(() => import('./Components/Footer/index'));

export default function App () {

  let movies = [
    {
      title: 'Bohemian Rhapsody',
      description: 'Drama, Biography, Music',
      img: 'https://i.pinimg.com/564x/2c/31/f1/2c31f1d983b9bdfc53d3ef4633bb9c1b.jpg',
      id: 'h321',
    },
    {
      title: 'Avengers: War of Infinity',
      description: 'Action & Adventure',
      img: 'https://mypostercollection.com/wp-content/uploads/2018/03/Avengers-Infinity-War-Poster-Official-2.jpg',
      id: 'h522',
    },
    {
      title: 'Interstellar ',
      description: 'Adventure, Drama',
      img: 'https://movieposters2.com/images/1243362-b.jpg',
      id: '6r32',
    },
  ];

  const [movieId, setMovieId] = useState(null);

  return (
    <Suspense fallback="Loading...">
      <div className="wrapper">
        <Header showSearchPanel={setMovieId} movieId={movieId} />
        <Container movies={movies} showMovieDetails={setMovieId} />
        <Footer>
          <p> netflixroulette </p>
        </Footer>
      </div>
    </Suspense>
  );

}