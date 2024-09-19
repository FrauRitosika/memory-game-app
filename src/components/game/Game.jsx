import React, { useCallback, useEffect, useState } from "react";
import GameForm from './GameForm';
import ResultForm from '../results/ResultForm';
import './Game.css';

const getRandomId = (max) => Math.floor(Math.random() * max);


export default function Game({ getQuestions, resultCodes = [] }) {

    const [resolvedQuestions, setResolved] = useState([]);
    const [isOpenResult, openResult] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [currentQuestion, changeQuestion] = useState(null);
    const [questions, setQuestionList] = useState([]);

    const fetchData = useCallback(async () => {
        const questionsData = await getQuestions();
        setQuestionList(questionsData);
        changeQuestion(getRandomQuestion(resolvedQuestions));
        setLoading(false);
    }, [isLoading]);

    useEffect(() => {
        fetchData()
    }, [fetchData ]);

    const getRandomQuestion = (resolvedQuestions) => {
        const resolvedQuestionsIds = resolvedQuestions.map((el) => el.questionId);
        const unresolvedQuestions = questions.filter(question => !resolvedQuestionsIds.includes(question.questionId));
        switch (unresolvedQuestions.length) {
            case 0: return {};
            default: return unresolvedQuestions[getRandomId(unresolvedQuestions.length - 1)];
        }
    };

    const setNewQuestion = () => changeQuestion(getRandomQuestion(resolvedQuestions));



    const setResult = (result) => {
        const questionResult = {
            questionId: currentQuestion.questionId,
            questionText: currentQuestion.questionText,
            result: result
        };

        setResolved([...resolvedQuestions, questionResult]);
        setNewQuestion();
    };

    const openCurrentResult = () => openResult(true);
    const closeCurrentResult = () => openResult(false);

    return (
        <section className='game'>
            {(isLoading) && <></>}
            {(!isLoading) && (<GameForm
                className='game__form'
                currentQuestionText={currentQuestion.questionText}
                buttonsList={resultCodes.filter((code) => code.isFinal === true)}
                setResult={setResult}
                openCurrentResult={openCurrentResult}
            />)}
            {isOpenResult && <ResultForm
                className='game__result'
                resolvedQuestions={resolvedQuestions}
                onClick={closeCurrentResult}
            />}
        </section>
    );
}