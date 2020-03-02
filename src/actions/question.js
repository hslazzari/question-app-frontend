export const FETCH_QUESTIONS_PENDING = 'FETCH_QUESTIONS_PENDING';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const POST_ANSWERS_PENDING = 'POST_ANSWERS_PENDING';
export const POST_ANSWERS_SUCCESS = 'POST_ANSWERS_SUCCESS';
export const POST_ANSWERS_ERROR = 'POST_ANSWERS_ERROR';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';

export function fetchQuestionsPending() {
    return {
        type: FETCH_QUESTIONS_PENDING
    }
}

export function fetchQuestionsSuccess(questions) {
    return {
        type: FETCH_QUESTIONS_SUCCESS,
        questions: questions
    }
}

export function fetchQuestionsError(error) {
    return {
        type: FETCH_QUESTIONS_ERROR,
        error: error
    }
}

export function answerQuestion(id, value){
    return {
        type: ANSWER_QUESTION,
        id: id,
        value: value
    }
}

export function postAnswersPending() {
    return {
        type: POST_ANSWERS_PENDING
    }
}

export function postAnswersSuccess(questions) {
    return {
        type: POST_ANSWERS_SUCCESS
    }
}

export function postAnswersError(error) {
    return {
        type: POST_ANSWERS_ERROR,
        answersError: error
    }
}

export function changeQuestion(questionId, enabled) {
    return {
        type: CHANGE_QUESTION,
        questionId,
        enabled
    }
}