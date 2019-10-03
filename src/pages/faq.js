import React, { Component } from "react"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import FaqQuestion from "../components/FaqQuestion"
import "../styles/_faq.scss"

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
          "Grundsätzlich kannst du davon ausgehen, dass nur die Online-Kurse auf Englisch sein werden. Die Kurse sind allerdings gut verständlich und weiterhin gibt es bei den meisten Plattformen die Möglichkeit deutsche Untertitel einzustellen. Unsere Meetings im Semester werden in Deutsch abgehalten werden.",
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
      <>
        <NavBar />
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
        <Footer />
      </>
    )
  }
}

export default faq
