import {FETCH_QUESTIONS_PENDING, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_ERROR, ANSWER_QUESTION, POST_ANSWERS_PENDING, POST_ANSWERS_SUCCESS, POST_ANSWERS_ERROR, CHANGE_QUESTION} from './question'

describe('question actions', () => {
  it('Fetch FETCH_QUESTIONS_PENDING', () => {
    expect(actions.fetchQuestionsPending()).toEqual({
      type: FETCH_QUESTIONS_PENDING
    })
  })
})
