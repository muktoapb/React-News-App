import React from 'react';
import './Header.css';
import Search from './Search';




export default function Header() {
  return (
    <header className='header_area'>
        <div className="logo">
            <img src={require('../../img/react-news-logo.png')} alt="" />
        </div>
        <Search/>
    </header>
  )
}
