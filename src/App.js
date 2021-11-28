import React from 'react';
import Header from './Containers/Header';
import Container from './Containers/Container/Container';
import Footer from './Components/Footer/index';
import './App.css';

export default function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Container />
        <Footer>
          <p> netflixroulette </p>
        </Footer>
      </div>
    </>
  );
}