import React from 'react';
import imgLogoGitHub from '../../assets/github.svg';
import imgLogoLinkedIn from '../../assets/linkedin.svg';
import './Footer.css';

export default function Footer({ className }) {
    return (
        <footer className={`${className} footer`}>
            <ul className='footer__social-list'>
                <li>
                    <a className='footer__social-item'
                        href='https://github.com/FrauRitosika?tab=repositories'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='footer__social-img-container'>
                            <img className='footer__social-img'
                                height={30}
                                src={imgLogoGitHub}
                                alt='Логотип платформы github'
                            />
                        </div>

                    </a>
                </li>
                <li>
                    <a className='footer__social-item'
                        href='https://www.linkedin.com/in/margarita-buslakova-58731626a/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='footer__social-img-container'>
                            <img className='footer__social-img'
                                height={30}
                                src={imgLogoLinkedIn}
                                alt='Логотип LinkedIn' />
                        </div>
                    </a>
                </li>
            </ul>
        </footer>);
}