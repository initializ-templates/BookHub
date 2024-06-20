import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Welcome to BookHub, your go-to site for discovering your next great read. Explore our vast collection across all genres, from fiction to non-fiction, and find reviews to guide your choices. Happy reading!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header
