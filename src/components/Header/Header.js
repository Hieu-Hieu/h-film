import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/img/hmovie.png';
import { BiSearch } from "react-icons/bi";

const headerNav = [
    { id: 1, name: 'Home', path: '/' }, { id: 2, name: 'Movies', path: '/movies' }, { id: 3, name: 'TV Series', path: '/tv' }
]

const Header = () => {
    const headerRef = useRef(null);
    const { pathname } = useLocation();
    console.log(useLocation())

    return (
        <header ref={headerRef} className='header'>
            <div className='header__wrap container'>
                <div className='logo'>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                        <span>H-film</span>
                    </Link>
                </div>
                <ul className='header__nav'>
                    {
                        headerNav.map(item => {
                            return (
                                <li key={item.id} className={item.path === pathname ? 'active' : null}>
                                    <Link to={item.path}>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='header__search'>
                    <input className='header__search-input' placeholder='Tìm kiếm...' />
                    <button className='header__search-btn'><BiSearch /></button>
                </div>
            </div>
        </header>
    )
}

export default Header