import React, { Component } from "react"

// plugins & external
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

// components
import FaqQuestion from "../components/shared/FaqQuestion"
import Layout from "../components/Layout/Layout"

class faq extends Component {
  state = {
    questions: [
      {
        question: "faqpage.question1",
        answer: "faqpage.answer1"
          
      },
      {
        question: "faqpage.question2",
        answer: "faqpage.answer2"
          
      },
      {
        question: "faqpage.question3",
        answer: "faqpage.answer3"
          
      },
      {
        question: "faqpage.question4",
        answer: "faqpage.answer4"
          
      },
      {
        question: "faqpage.question5",
        answer: "faqpage.answer5"
          
      },
      {
        question: "faqpage.question6",
        answer: "faqpage.answer6"
          
      },
      {
        question: "faqpage.question7",
        answer: "faqpage.answer7"
          
      },
      {
        question: "faqpage.question8",
        answer: "faqpage.answer8"
          
      },
      {
        question: "faqpage.question9",
        answer: "faqpage.answer9"
          
      },
      {
        question: "faqpage.question10",
        answer: "faqpage.answer10"
          
      },
      {
        question: "faqpage.question11",
        answer: "faqpage.answer11"
          
      },
      {
        question: "faqpage.question12",
        answer: "faqpage.answer12"
          
      },
      {
        question: "faqpage.question13",
        answer: "faqpage.answer13"
          
      },
      {
        question: "faqpage.question14",
        answer: "faqpage.answer14"
          
      },
    ],
    search: "",
  }
  render() {
    const { intl } = this.props
    const placeholder = intl.formatMessage({id: 'faq.search.placeholder'})
    const { questions, search } = this.state

    const filteredQuestions = questions.filter(question => {
      return question.question.toLowerCase().includes(search.toLowerCase())
    })
    return (
      <Layout>
        <div className="container">
          <div className="row py-5">
            <div className="col-8">
              <h1>FAQ</h1>
            </div>
            <div className="col">
              <input
                type="search"
                className="faq--search mt-2"
                aria-label="Search question"
                placeholder="Search question"
                onChange={e => {
                  this.setState({
                    search: e.target.value,
                  })
                }}
              />
            </div>
          </div>
          <div className="row" />
          {filteredQuestions.map((question, index) => (
            <FaqQuestion
              question={question.question}
              answer={question.answer}
              key={index}
            />
          ))}
        </div>
      </Layout>
    )
  }
}

export default injectIntl(faq)
