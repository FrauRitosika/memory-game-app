const resultCodes = [

    {
        code: 'SOLVED',
        actionName: 'Знаю',
        description: 'Ответ на вопрос получен',
        isFinal: true
    },
    {
        code: 'SOLVED_UNCERTAINTLY',
        actionName: 'Нужно повторение',
        description: 'Ответ на вопрос получен частично',
        isFinal: true
    },
    {
        code: 'NO_RESULT',
        description: 'Вопрос не пройден',
        isFinal: false
    },
    {
        code: 'NOT_SOLVED',
        actionName: 'Не знаю',
        description: 'Ответ на вопрос не получен',
        isFinal: true
    }
];

export { resultCodes };