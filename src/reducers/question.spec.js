import question from './question'
import {FETCH_QUESTIONS_PENDING, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_ERROR, ANSWER_QUESTION, POST_ANSWERS_PENDING, POST_ANSWERS_SUCCESS, POST_ANSWERS_ERROR, CHANGE_QUESTION} from '../actions/question';

describe('Question reducer', () => {
  it('should handle FETCH_QUESTIONS_PENDING', () => {
    expect(
      question([], {
        type: FETCH_QUESTIONS_PENDING
      })
    ).toEqual({
      pending: true
    })
  })
  it('should handle FETCH_QUESTIONS_SUCCESS', () => {
    expect(
      question([], {
        type: FETCH_QUESTIONS_SUCCESS
      })
    ).toEqual({
      pending: false,
      questions: undefined
    })
  })

  it('should handle FETCH_QUESTIONS_ERROR', () => {
    expect(
      question([], {
        type: FETCH_QUESTIONS_ERROR
      })
    ).toEqual({
      pending: false,
      error: undefined
    })
  })
  it('should handle POST_ANSWERS_PENDING', () => {
    expect(
      question({pendingAnswers: null}, {
        type: POST_ANSWERS_PENDING
      })
    ).toEqual({
      pendingAnswers: true
    })
  })
  it('should handle POST_ANSWERS_ERROR', () => {
    expect(
      question({pendingAnswers: null}, {
        type: POST_ANSWERS_ERROR
      })
    ).toEqual({
      pendingAnswers: false,
      resultAnswers: false
    })
  })
  it('should handle POST_ANSWERS_SUCCESS', () => {
    expect(
      question({pendingAnswers: true}, {
        type: POST_ANSWERS_SUCCESS
      })
    ).toEqual({
      pendingAnswers: false,
      resultAnswers: true
    })
  })
})
