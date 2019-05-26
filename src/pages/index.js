import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "../components/Navbar"
import "bootstrap/dist/js/bootstrap.js"
import $ from "jquery"
import Popper from "popper.js"
import Footer from "../components/Footer";

const index = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6 my-auto">
              <h1 class="display-4">The New Internet</h1>
              <p class="lead text-muted mb-4">
                We've built a decentralized internet where information is
                totally free in every sense of the word.
              </p>
              <a class="btn btn-primary" href="#">
                Sign up for free
              </a>
              <a class="btn btn-link" href="#">
                Read more
              </a>
            </div>
            <div class="col-md-6">
              <img
                class="img-fluid mt-4 mt-md-0"
                src="https://bootstrapshuffle.com/placeholder/pictures/bg_4-3.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section class="py-5">
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-md-2 mb-4">
              <h5 class="text-center">Thousands of happy companies</h5>
            </div>
            <div class="col-md-10">
              <div class="row">
                <div class="col-4 col-md-2 mb-4"><img class="img-fluid" src="https://bootstrapshuffle.com/placeholder/logos/gitscape.svg" alt=""/></div>
                <div class="col-4 col-md-2 mb-4"><img class="img-fluid" src="https://bootstrapshuffle.com/placeholder/logos/k-hole.svg" alt=""/></div>
                <div class="col-4 col-md-2 mb-4"><img class="img-fluid" src="https://bootstrapshuffle.com/placeholder/logos/tholio.svg" alt=""/></div>
                <div class="col-4 col-md-2 mb-0 mb-md-4"><img class="img-fluid" src="https://bootstrapshuffle.com/placeholder/logos/plucky.svg" alt=""/></div>
                <div class="col-4 col-md-2 mb-0 mb-md-4"><img class="img-fluid" src="https://bootstrapshuffle.com/placeholder/logos/1stsight.svg" alt=""/></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="d-flex flex-column bg-light h-100 p-4">
                <h2>Great Companies that already use PiperNet.</h2>
                <div class="d-flex flex-column mt-auto">
                  <p class="col-sm-8 px-0">We are constantly looking for new partners to migrate onto the Piper Net. The future of the internet ishere - venture towards it with Pied Piper!</p><a class="ml-auto" href="#">View all PiperNet clients</a>
                </div>
              </div>
            </div>
            <div class="d-flex col-lg-6 flex-wrap">
              <div class="p-2 col-sm-6"><img class="img-fluid" src="https://bootstrapshuffle.com/placeholder/pictures/bg_4-3.svg" alt=""/></div>
              <div class="p-2 col-sm-6"><img class="img-fluid" src="https://bootstrapshuffle.com/placeholder/pictures/bg_4-3.svg" alt=""/></div>
              <div class="p-2 col-sm-6"><img class="img-fluid" src="https://bootstrapshuffle.com/placeholder/pictures/bg_4-3.svg" alt=""/></div>
              <div class="p-2 col-sm-6"><img class="img-fluid" src="https://bootstrapshuffle.com/placeholder/pictures/bg_4-3.svg" alt=""/></div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-5">
      <div class="container">
        <h2 class="mb-4 text-center">PiperNet Setup</h2>
        <p class="lead mb-5 text-center">We've designed a simple, efficient process for companies migrating to PiperNet. Here's how it works.</p>
        <div class="row">
          <div class="col-md-6"><img class="img-fluid" src="https://bootstrapshuffle.com/placeholder/pictures/bg_4-3.svg" alt=""/></div>
          <div class="col-md-6 mt-3 mt-md-0">
            <div class="d-flex mb-2"><span class="display-4 mr-4">1</span>
              <div>
                <h3>Move Data</h3>
                <p>Using our Piper Assistant application, you can move your data to be stored our decentralized network with simple drag & drop.</p>
              </div>
            </div>
            <div class="d-flex mb-2"><span class="display-4 mr-4">2</span>
              <div>
                <h3>Integrate Software</h3>
                <p>We want to make sure that you can keep using the software that you use to manage your  business.</p>
              </div>
            </div>
            <div class="d-flex"><span class="display-4 mr-4">3</span>
              <div>
                <h3>Ongoing Support</h3>
                <p>As with all innovative technologies, sometimes unpredictable things will happen, and you can always count on our support to solve issues for you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
              
    <section class="pt-5">
      <div class="container">
        <div class="row mt-5 pr-5">
          <div class="col-md-6 pb-5">
            <h2 class="mb-3">PiperNet Setup</h2>
            <p>Let's get you connected! We've designed a simple, efficient process for companies migrating to PiperNet. Here's how it works.</p>
            <ul class="list-inline ml-4 mt-5">
              <li class="d-flex mb-4"><span class="mb-auto mr-3 rounded-circle px-3 py-2 bg-primary">1</span>
                <div>
                  <h3>Move Data</h3>
                  <p>Using our Piper Assistant application, you can move your data to be stored our decentralized network with simple drag & drop.</p>
                </div>
              </li>
              <li class="d-flex mb-4"><span class="mb-auto mr-3 rounded-circle px-3 py-2 bg-primary">2</span>
                <div>
                  <h3>Integrate Software</h3>
                  <p>We want to make sure that you can keep using the software that you use to manage your  business.</p>
                </div>
              </li>
              <li class="d-flex mb-4"><span class="mb-auto mr-3 rounded-circle px-3 py-2 bg-primary">3</span>
                <div>
                  <h3>Ongoing Support</h3>
                  <p>As with all innovative technologies, sometimes unpredictable things will happen, and you can always count on our support to solve issues for you.</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-md-6 mt-auto pl-5 d-none d-md-block"><img src="https://bootstrapshuffle.com/placeholder/pictures/bg_9-16.svg" alt="" height="600"/></div>
        </div>
      </div>
    </section>
              
    <section class="py-5">
      <div class="container text-center">
        <h2 class="mb-4">PiperNet Setup</h2>
        <p class="lead mb-5">We've designed a simple, efficient process for companies migrating to PiperNet. Here's how it works.</p>
        <div>
          <div class="row align-items-center text-md-left mb-5">
            <div class="col-md-6 order-1 order-md-0"><img class="img-fluid" src="https://bootstrapshuffle.com/placeholder/pictures/bg_16-9.svg" alt=""/></div>
            <div class="col-md-6 mb-4 mb-md-0"><span class="display-3 mb-2">01</span>
              <h3 class="mb-4">Move Data</h3>
              <p>Using our Piper Assistant application, you can move your data to be stored our decentralized network with simple drag & drop.</p>
            </div>
          </div>
          <div class="row align-items-center text-md-right mb-5">
            <div class="col-md-6 order-1"><img class="img-fluid" src="https://bootstrapshuffle.com/placeholder/pictures/bg_16-9.svg" alt=""/></div>
            <div class="col-md-6 mb-4 mb-md-0 order-0"><span class="display-3 mb-2">02</span>
              <h3 class="mb-4">Integrate Software</h3>
              <p>We want to make sure that you can keep using the software that you use to manage your  business.</p>
            </div>
          </div>
          <div class="row align-items-center text-md-left mb-5">
            <div class="col-md-6 order-1 order-md-0"><img class="img-fluid" src="https://bootstrapshuffle.com/placeholder/pictures/bg_16-9.svg" alt=""/></div>
            <div class="col-md-6 mb-4 mb-md-0"><span class="display-3 mb-2">03</span>
              <h3 class="mb-4">Ongoing Support</h3>
              <p>As with all innovative technologies, sometimes unpredictable things will happen, and you can always count on our support to solve issues for you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
              
    <section class="py-5">
      <div class="container text-center">
        <h2 class="mb-5">Learn more about PiperNet</h2>
        <div class="card-deck">
          <div class="card">
            <div class="card-body mt-3">
              <h5 class="card-title">Videos</h5>
              <p class="card-text">Stop watching boring YouTube videos, and check out Dinesh's extremely interesting series about the features of PiperNet.</p>
            </div>
            <div class="card-footer bg-transparent border-0 mb-3"><a class="btn btn-primary" href="#">Watch Now</a></div>
          </div>
          <div class="card">
            <div class="card-body mt-3">
              <h5 class="card-title">Articles</h5>
              <p class="card-text">Let Gilfoyle take you on a journey into the futuristic world of computing and data security in the decentralized age.</p>
            </div>
            <div class="card-footer bg-transparent border-0 mb-3"><a class="btn btn-primary" href="#">Read Now</a></div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  )
}

export default index
