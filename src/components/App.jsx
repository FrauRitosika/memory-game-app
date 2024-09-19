import Header from './sections/Header';
import Game from './game/Game';
import Footer from './sections/Footer';
import SectionText from './sections/Section';
import ToGameLink from './presentational/ToGameLink';
import Instruction from "./sections/Instruction";
import Title from './presentational/Title';
import imgGameStick from '../assets/img.png';
import imgVR from '../assets/CFARACTER.png';
import './App.css';

export default function App({ getQuestions, resultCodes = [] }) {

    return (
        <div className='page'>
            <Header className='page__header' />
            <main className='page__main'>
                <Title
                    className='page__tittle--visually-hidden'
                    contentName='page'
                    level={1}
                >Карточки для повторения материала по CSS, HTML и JS</Title>
                <SectionText
                    className='page__section-about'
                    title={{ text: 'О проекте', contentName: 'about' }}
                    img={{ width: 550, src: imgGameStick, alt: 'Игровой джойстик' }}
                    tagParams={{ class: 'about', directionMode: 'reverse' }}
                    blockquote={{ text: 'Начинать всегда стоит с того, что сеет сомнение' }}
                >
                    <div className='page__paragraph-about-container'>
                        <p className='page__paragraph'>
                            Это мог быть чат-бот в Telegram, но я начинающий frontend-разработчик
                            и мне нужна страничка для тренировок приобретённых умений и подготовки
                            к собеседованиям. На этой страничке собраны вопросы, ответы на которые
                            мне полезно прокручивать в голове.
                        </p>
                        <p className='page__paragraph-about'>
                            Напишите мне, если у вас есть
                            замечания, предложения или советы по поиску работы. Привтствуется
                            любая обратная связь.
                        </p>
                        <ToGameLink
                            className='about-section-link'
                        />
                    </div>
                </SectionText>
                <SectionText
                    className='page__section-rules'
                    title={{ text: 'Правила', contentName: 'rules' }}
                    img={{ width: 400, src: imgVR, alt: 'Игрок в VR-очках' }}
                    tagParams={{ class: 'rules', directionMode: 'forward' }}
                    blockquote={{ text: 'Многие путают свое воображение со своей памятью' }}
                >
                    <div className='page__paragraph-container'>
                        <p className='page__paragraph'>
                            Карточки для запоминания – это инструмент, помогающий учащимся
                            эффективно запоминать информацию и улучшать свои навыки. С их
                            помощью можно разбить учебный материал на удобные для запоминания
                            кусочки.
                        </p>

                    </div>
                </SectionText>
                <Instruction
                    className='page__section-instruction'
                />
                <Game
                    className='page__section'
                    getQuestions={getQuestions}
                    resultCodes={resultCodes}
                />
            </main >
            <Footer className='page__footer' />
        </div>
    );
}