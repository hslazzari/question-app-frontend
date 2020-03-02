import React, { Component, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'

class Question extends Component {
    onChange(evt, question) {
      const { answerQuestion, toggleQuestion } = this.props;
      answerQuestion(question.questionId, evt.target.value);
      if(question.question_type.type == 'single_choice_conditional') {
        if(question.question_type.enable.option == evt.target.value) {
          toggleQuestion(question.question_type.enable.id, true)
        } else {
          toggleQuestion(question.question_type.enable.id, false)
        }
      }
    }

    onSubmit(evt) {
      evt.preventDefault();
      const { postAnswers, userid, answers } = this.props;
      postAnswers(userid, answers);
      return false;
    }

    applyQuestion(question) {
      switch(question.question_type.type) {
        case 'single_choice_conditional':
        case 'single_choice':
          return <Form.Control as="select" onChange={(evt) => this.onChange(evt, question)}>
            <option value='None'>Choose a option</option>
            {question.question_type.options.map(value => {
              return <option value={value}>{value}</option>
            })}
          </Form.Control>
        case 'number_range':
          return <Form.Control as="input" onChange={(evt) => this.onChange(evt, question)} placeholder='Response'>
          </Form.Control>
      }
    }

    
    render() {
      const { questions } = this.props;
      

      return (<Form>
          {questions.map((value) => {
            return <div>
                <label>{value.name}</label>
                  {value.questions.map((question => {
                    if(question.disabled)
                      return
                    
                    return <Form.Group>
                            <Form.Label>{question.questionId}) {question.question}</Form.Label>
                        {this.applyQuestion(question)}        
                    </Form.Group>
                  }))}
                </div>
            })}
          <Button variant="primary" onClick={(evt) => this.onSubmit(evt)}>Send</Button>
      </Form>)
    }
}

export default Question
