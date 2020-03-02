import {fetchQuestionsPending, fetchQuestionsSuccess, fetchQuestionsError, answerQuestion, postAnswersError, postAnswersSuccess, postAnswersPending, changeQuestion} from '../actions/question';
import { v4 as uuidv4 } from 'uuid';

export function fetchQuestions() {
    return dispatch => {
        dispatch(fetchQuestionsPending());
        fetch('http://localhost:3400/question')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchQuestionsSuccess(res))
        })
        .catch(error => {
            dispatch(fetchQuestionsError(error));
        })
    }
}

export function answerQuestionDispatch(id, value) {
    return dispatch => {
        dispatch(answerQuestion(id, value));
    }
}

export function postAnswers(userid, answers) {
    return dispatch => {
        dispatch(postAnswersPending());
        const answersObj = Object.keys(answers).reduce((acc, key) => {
            acc.push({questionId:Number(key), answer: [answers[key]]})
            return acc;
        }, []);
        const body = {question: answersObj}
        fetch('http://localhost:3400/question', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'userid': userid,
                'txid': uuidv4()
              },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(postAnswersSuccess(res))
        })
        .catch(error => {
            dispatch(postAnswersError(error));
        })
    }
}

export function toggleQuestionDispatch(questionId, enabled) {
    return dispatch => {
        dispatch(changeQuestion(questionId, enabled));
    }
}