import React from 'react';
import QuestionResult from './QuestionResult';
import Modal from '../presentational/Modal';
import './ResultForm.css';

export default function ResultForm({ resolvedQuestions = [], onClick }) {

    const reviewOuestions = resolvedQuestions.filter((question) => question.result !== 'SOLVED');

    return (
        <Modal
            title='Вопросы к изучению'
            classNameWindow='form-result'
            onClick={onClick}
        >
            {
                (() => {
                    switch (reviewOuestions.length) {
                        case 0: return (<p className='form-result__message'>{resolvedQuestions.length === 0 ? 'Вы еще не ответили ни на один вопрос' : 'Не выявили тем для повторения. Вы идеальны!'}</p>);
                        default: return (<ul className='form-result__result-list'>
                            {reviewOuestions.map((question) => (
                                <li key={question.questionId} className='form-result__result-item'>
                                    <QuestionResult
                                        questionText={question.questionText}
                                        result={question.result}
                                    />
                                </li>
                            ))}
                        </ul>);
                    }
                })()
            }
        </Modal>
    );
}
