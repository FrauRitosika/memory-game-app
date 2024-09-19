class StudyProgress {
    constructor(questionsList) {
        this.questions = Array.from(questionsList).map((question, questionIndex) => {
            return {
                questionId: questionIndex + 1,
                questionText: String(question)
            };
        });
    }



    setQuestionResultById = (id, resultCode) => this.questions
        .find(question => question.questionId === id)
        .map(question => question.questionResult = resultCode);

    getStudyProgress() {
        const progress = {};
        for (let result of this._resultCodes.codes) {
            progress[result.code] = this.questions.filter(question => question.questionResult === result.code).length;
        }
        return progress;
    }

    getStudyResult() {
        const finalCodes = this._resultCodes.codes.filter(result => result.isFinal === true).map(result => result.code);
        return this.questions.filter(question => finalCodes.includes(question.questionResult));
    }



    _getRandomId = (max) => Math.floor(Math.random() * max);

}

export { StudyProgress };

