import React, { Component } from "react"
import FaqQuestion from "../components/shared/FaqQuestion"
import Layout from "../components/Layout/Layout"

class faq extends Component {
  state = {
    questions: [
      {
        question: "How can I apply for the Digital Shaper Program?",
        answer:
          "This can be done directly via our application form for the respective location.",
      },
      {
        question: "What should I write in my application to be accepted?",
        answer:
          "At TechLabs we want to get to know you and your motivation better. Thats why its generally true that there is no right or wrong answer to the questions. Please only make sure that your answer really refers to the question. Unfortunately, we cannot evaluate important aspects that do not relate to the question.",
      },
      {
        question: "Who can I contact if I have any questions?",
        answer:
          "Please contact your location directly or write to us at contact@techlabs.org",
      },
      {
        question: "Can I still apply in the next semester?",
        answer:
          "We welcome your application at any time! Our application phases always start at the beginning of the semester.",
      },

      {
        question: "How much time will I have to invest?",
        answer:
          "In general, learning is an individual process. Nevertheless, we recommend that you work regularly on your curriculum and allow for about 5 hours per week. Please also bear in mind that the project phase can mean increased coordination effort with your project team. In any case, the invested time will be worth it.",
      },
      {
        question: "I don't have any tech skills. Is that bad?",
        answer:
          "TechLabs' goal is to make all people digital shapers, regardless of their level of knowledge. That's why we welcome your application! We also take your previous knowledge into account with our individualized learning paths. ",
      },
      {
        question: " How do you finance yourselves?",
        answer:
          "As a non-profit association, we are financed by donations and work closely with sponsoring partners.",
      },
      {
        question: "What expenses will I have to pay?",
        answer:
          "None at all! We offer you the best courses, the best possible support as well as exciting guest lectures and meetings with our partners at any time free of charge. The fees for the online courses will be refunded. More detailed information will follow in the semester.",
      },
      {
        question: "How does the course fee refund process work?",
        answer:
          " Detailed information on the course fee refund process will be provided at the beginning of the semester. If you have any questions, please do not hesitate to contact us.",
      },
      {
        question:
          "Under what conditions do I receive the Digital Shaper certificate?",
        answer:
          "You will receive the certificate if you complete the project together with your project group consisting of three to four people at the end of the semester break and summarise the results in a blog post.",
      },
      {
        question: "Is there an attendance requirement for your meetings?",
        answer:
          "We are working to make our meetings as varied and appealing as possible. There is no obligation to attend to achieve our Digital Shaper certificate.",
      },
      {
        question: "What language will the courses be in?",
        answer:
          "Basically, you can assume that only the online courses will be in English. However, the courses are easy to understand and most platforms offer the possibility to add German subtitles. Our semester meetings will be held in German.",
      },
      {
        question: "How much does it cost?",
        answer:
          "We don’t want money to be an issue. That’s why all our programs are completely free of charge.",
      },
      {
        question: "Who can apply for our programs?",
        answer:
          "We encourage everybody to apply for our programs. Our mission is to enable as many people as possible to acquire state-of-the-art tech skills to solve today’s problems. It doesn’t matter if you are already working or still a student. We welcome everybody at TechLabs! Please apply.",
      },
    ],
    search: "",
  }
  render() {
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
          {filteredQuestions.map(question => (
            <FaqQuestion
              question={question.question}
              answer={question.answer}
            />
          ))}
        </div>
      </Layout>
    )
  }
}

export default faq
