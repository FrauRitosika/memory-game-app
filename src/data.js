import { getQuestionList } from "./data-from-google";

async function getQuestions() {

    let questions = [];
    await getQuestionList().then(res => {
        questions = Array.from(res).map((question, questionIndex) => {
            return {
                questionId: questionIndex + 1,
                questionText: String(question)
            };
        })
    });

    return questions;
}

export {getQuestions}