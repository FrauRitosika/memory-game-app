import React from 'react';
import Title from '../presentational/Title';
import './Instruction.css';

export default function Instruction({ className }) {
    return (
        <section className={`${className} instruction`}>
            <Title
                className='instruction__title'
                contentName='instruction'
                level={3}
            >Как играть</Title>
            <ul className='instruction__step-list'>
                <li className='instruction__step-item'>
                    {'Переходим в раздел '} <a href='#game'> Играть </a>
                </li>
                <li className='instruction__step-item'>
                    Открывается первая карточка, в которой нужно изучить текст вопроса
                </li>
                <li className='instruction__step-item'>
                    Если ответ нам известен, его нужно сформулировать полными
                    предложениями и лучше проговорить вслух
                </li>
                <li className='instruction__step-item'>Отмечаем карточку в зависимости от ответа</li>
                <ul className='instruction__step-list'>
                    <li className='instruction__step-item'>«Знаю», если удалось сформулировать уверенный ответ.</li>
                    <li className='instruction__step-item'>
                        «Требуется повторение», если ответ в общих чертах известен, но к
                        настоящему собеседованию хотелось бы подтянуть знания по теме.
                    </li>
                    <li className='instruction__step-item'>
                        «Не знаю», если ответа вспомнить не удалось или в нем не было
                        уверенности
                    </li>
                </ul>
                <li className='instruction__step-item'>
                    Повторяем описанные выше действия пока не устанем. Когда это
                    произойдет, можно будет скачать файлик с вопросами, на которые игрок
                    ответил «Не знаю» или «Требуется повторение» с помощью кнопки
                    «Получить результаты»
                </li>
            </ul>
        </section>
    );
}