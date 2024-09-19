import React from 'react';
import Title from '../presentational/Title';
import './Section.css';

export default function Section({ title, img, blockquote, tagParams, children }) {
    return (
        <section className={`${tagParams.class} section`}>
            <div className={`section__container--${tagParams.directionMode === 'reverse' ? 'reverse' : 'forward'}`}>
                {!!img && <div className='section__img-container'>
                    <img
                        className='section__img'
                        width={img.width}
                        src={img.src}
                        alt={img.alt}
                    />
                </div>}
                <div className='section__container-text'>
                    <Title
                        className='section__title'
                        contentName={title.contentName ?? ''}
                        level={2}
                    >{title.text ?? 'Заголовок'}</Title>
                    {!!blockquote && <blockquote className='section__tagline tagline'>
                        {blockquote.text}
                    </blockquote>}
                    {children}
                </div>
            </div>
        </section>
    );
}