import React from 'react';
import ToGameLink from '../presentational/ToGameLink';
import Link from '../presentational/Link';
import imgLogo from '../../assets/book-opened-svgrepo-com.svg';
import './Header.css';

export default function Header({ className }) {
    return (<header className={`${className} header`}>
        <nav className='header__navigation navigation'>
            <div className='navigation__logo'>
                <a className='logo' href='#page'>
                    <img
                        className='logo__img'
                        height={60}
                        href='#page'
                        src={imgLogo}
                        alt='Логотип'
                    />
                </a>
            </div>
            <ul className='navigation__link-list'>
                <li className='navigation__link-item'>
                    <Link
                        path='#about'
                        text='О проекте'
                    />
                </li>
                <li className='navigation__link-item'>
                    <Link
                        path='#rules'
                        text='Правила'
                    />
                </li>
                <li className='navigation__link-item'>
                    <ToGameLink />
                </li>
            </ul>
        </nav >
    </header >);
}