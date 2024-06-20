import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <main>
        <Header />
        <Outlet />
        <p style={{ textAlign: 'center' }}>
      © 2024, Made with {'❤️'} by {' '}
      <a href="https://initializ.ai" style={{ color: '#7353e5' }}>initializ inc</a>
    </p>
    </main>
  )
}

export default Home
