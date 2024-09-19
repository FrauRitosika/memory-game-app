import React from 'react';
import ButtonsBar from '../presentational/ButtonsBar';
import Button from '../presentational/Button';
import Title from '../presentational/Title';
import './GameForm.css';

export default function GameForm({ currentQuestionText, buttonsList, setResult, openCurrentResult }) {

    return (
        <div className='game-form'>
            <Title
                className='game-form__title'
                contentName='game'
                level={2}
            >Играть</Title>
            <div className='game-form__question question-card'>
                <Title
                    className='question-card__title'
                    level={3}
                >Вопрос</Title>
                <p className='question-card__text'>{currentQuestionText}</p>
                <Title
                    className='question-card__title'
                    level={3}
                >Ответ</Title>
                <ButtonsBar
                    buttonsList={buttonsList}
                    onClick={setResult}
                />
            </div>
            <div className='question-card__footer-container'>
                <Button
                    name='Получить результат'
                    className='question-card__get-result-button'
                    onClick={openCurrentResult}
                />
            </div>
        </div>
    );
}