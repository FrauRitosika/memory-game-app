import React from "react";
import './QuestionResult.css';

export default function QuestionResult({questionText, result}) {
    return (
    <div className="question-result">
      <p className="question-result__text">{questionText}</p>
      <div className={`question-result__status ${result === 'NOT_SOLVED' ? 'question-result__status--unresolved' : 'question-result__status--reviewed'}`}>
        {result === 'NOT_SOLVED' ? 'Изучить' : 'Повторить'}
        </div>
    </div>
    );
}