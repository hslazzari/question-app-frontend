import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Question from '../components/Question'
import { fetchQuestions, answerQuestionDispatch, postAnswers, toggleQuestionDispatch } from '../actions/fetchQuestion';
import {getQuestionsError, getQuestions, getQuestionsPending, getUserId, getAnswers, getResultAnswers} from '../reducers/question';

class ProductView extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {fetchQuestions} = this.props;
        fetchQuestions();
    }


    render() {
        const {resultAnswers, questions, answerQuestion, postAnswers, userid, answers, toggleQuestion} = this.props;
        
        const styleDiv = {
            margin: 'auto',
            width: '50%',
            border: '3px solid black',
            padding: '10px'
        }
        
        return (
            <div style={styleDiv}>
                <Question questions={questions} answerQuestion={answerQuestion} toggleQuestion={toggleQuestion} postAnswers={postAnswers} userid={userid} answers={answers} resultAnswers={resultAnswers}></Question>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    error: getQuestionsError(state),
    questions: getQuestions(state),
    pending: getQuestionsPending(state),
    userid: getUserId(state),
    answers: getAnswers(state),
    resultAnswers: getResultAnswers(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchQuestions: fetchQuestions,
    answerQuestion: answerQuestionDispatch,
    postAnswers: postAnswers,
    toggleQuestion: toggleQuestionDispatch
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductView );
