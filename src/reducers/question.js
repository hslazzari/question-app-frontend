
import {FETCH_QUESTIONS_PENDING, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_ERROR, ANSWER_QUESTION, POST_ANSWERS_PENDING, POST_ANSWERS_SUCCESS, POST_ANSWERS_ERROR, CHANGE_QUESTION} from '../actions/question';
import update from 'immutability-helper';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    pending: false,
    answers: {},
    userid: uuidv4(), 
    questions: [],
    error: null,
    pendingAnswers: false,
    resultAnswers: null

}

export default function questionsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_QUESTIONS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_QUESTIONS_SUCCESS:
            return {
                ...state,
                pending: false,
                questions: action.questions
            }
        case FETCH_QUESTIONS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case ANSWER_QUESTION:
            const change = {};
            change[action.id] = action.value;

            return update(state, {
                answers: {
                    $merge: change
                }
            })
        case POST_ANSWERS_PENDING:
            return update(state, {
                pendingAnswers : {
                    $set: true
                }
            })
        case POST_ANSWERS_SUCCESS:
            return update(state, {
                resultAnswers : {
                    $set: true
                },
                pendingAnswers : {
                    $set: false
                }
            })
        case POST_ANSWERS_ERROR:
            return update(state, {
                resultAnswers : {
                    $set: false
                },
                pendingAnswers : {
                    $set: false
                }
            })
        case CHANGE_QUESTION: 
            let idxCateg = -1;
            let idxQuestion = -1;
            state.questions.forEach((categ, categIdx) => {
                categ.questions.forEach((quest, questIdx) => {
                    if(quest.questionId == action.questionId) {
                        idxCateg = categIdx;
                        idxQuestion = questIdx;
                    }
                });
            })
            if(idxCateg != -1) {
                return update(state, {
                    questions : {
                        [idxCateg] : {
                            questions : {
                                [idxQuestion] : {
                                    disabled : {
                                        $set: !action.enabled
                                    }
                                }
                            }
                        }
                    }
                })
            }
            return state;
        default:
            return state;
    }
}

export const getQuestions = state => state.question.questions;
export const getQuestionsPending = state => state.question.pending;
export const getQuestionsError = state => state.question.error;
export const getUserId = state => state.question.userid;
export const getAnswers = state => state.question.answers;
export const getResultAnswers = state => state.question.resultAnswers;