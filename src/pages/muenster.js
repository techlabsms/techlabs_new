import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import "../styles/_location.scss"
import "../styles/_location_muenster.scss"
import Footer from '../components/Footer'
import MS from '../assets/loc-ms.svg'
import {Helmet} from "react-helmet"




class muenster extends Component {
    render() {
        return (
            <>
                <NavBar />
                
                <Helmet>
                <script src="https://embed.small.chat/TG9SCN33JGHR17BPSR.js" async></script>
            </Helmet>

                <body>
    <div className="container-fluid">
                
      <section>
      <div className="location-hero-ms location-hero">
      <div>

            <div className="col-md-7 col-lg-5 border-0 my-5 p-5 location-card">

              <h1 className="location-title"> <img src={MS} alt=""/> Muenster</h1>
              <p className="text-muted batch-text">Next Batch 01.10.2019
              </p>
              
              <a className="btn btn-primary" href="#">Apply now</a>
              <a className="btn btn-secondary" href="#">Contact us</a>
              </div>
        </div>
        </div>
      </section>
                
      <section className="py-3">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <h5 className="mb-3"><a href="#">Pied Piper</a></h5>
            <div className="d-flex mb-3"><a href="#"><img className="mr-3" src="placeholder/icons/twitter.svg" alt=""/></a><a href="#"><img className="mr-3" src="placeholder/icons/facebook-f.svg" alt=""/></a><a href="#"><img className="mr-3" src="placeholder/icons/instagram.svg" alt=""/></a><a href="#"><img src="placeholder/icons/linkedin-in.svg" alt=""/></a></div>
            <div className="d-flex">
              <p className="mb-0 small text-muted">&copy; 2019 Pied Piper. All right reserved.</p>
            </div>
          </div>
        </div>
      </section>
                
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">PiperNet Setup</h2>
          <p className="lead mb-5">We've designed a simple, efficient process for companies migrating to PiperNet. Here's how it works.</p>
          <div>
            <div className="row align-items-center text-md-left mb-5">
              <div className="col-md-6 order-1 order-md-0"><img className="img-fluid" src="https://bootstrapshuffle.com/placeholder/pictures/bg_16-9.svg" alt=""/></div>
              <div className="col-md-6 mb-4 mb-md-0"><span className="display-3 mb-2">01</span>
                <h3 className="mb-4">Move Data</h3>
                <p>Using our Piper Assistant application, you can move your data to be stored our decentralized network with simple drag & drop.</p>
              </div>
            </div>
            <div className="row align-items-center text-md-right mb-5">
              <div className="col-md-6 order-1"><img className="img-fluid" src="https://bootstrapshuffle.com/placeholder/pictures/bg_16-9.svg" alt=""/></div>
              <div className="col-md-6 mb-4 mb-md-0 order-0"><span className="display-3 mb-2">02</span>
                <h3 className="mb-4">Integrate Software</h3>
                <p>We want to make sure that you can keep using the software that you use to manage your  business.</p>
              </div>
            </div>
            <div className="row align-items-center text-md-left mb-5">
              <div className="col-md-6 order-1 order-md-0"><img className="img-fluid" src="https://bootstrapshuffle.com/placeholder/pictures/bg_16-9.svg" alt=""/></div>
              <div className="col-md-6 mb-4 mb-md-0"><span className="display-3 mb-2">03</span>
                <h3 className="mb-4">Ongoing Support</h3>
                <p>As with all innovative technologies, sometimes unpredictable things will happen, and you can always count on our support to solve issues for you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
                
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">The Pied Piper Blog</h2>
          <div className="row">
            <div className="col-lg-7">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-5 mb-4 mb-md-0"><a href="#"><img className="img-fluid" src="https://bootstrapshuffle.com/placeholder/pictures/bg_4-3.svg" alt=""/></a></div>
                    <div className="col-md-7"><a className="badge badge-primary px-2" href="#">Label</a>
                      <h5 className="card-title my-2"><a href="#">Why I'm the Best Programmer Ever</a></h5>
                      <p className="small text-muted">I feel like not everybody outside of Pied Piper knows it, so I wanted to make it clear why I'm the best programmer in the world.</p><a href="#">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-5 mb-4 mb-md-0"><a href="#"><img className="img-fluid" src="https://bootstrapshuffle.com/placeholder/pictures/bg_4-3.svg" alt=""/></a></div>
                    <div className="col-md-7"><a className="badge badge-primary px-2" href="#">Label</a>
                      <h5 className="card-title my-2"><a href="#">Why Strong Tea Isn't Good For CEOs</a></h5>
                      <p className="small text-muted">An exhaustive guide about how different teas can affect a CEO during their workday.</p><a href="#">Read more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card"><a href="#"><img className="card-img-top" src="https://bootstrapshuffle.com/placeholder/pictures/bg_16-9.svg" alt=""/></a>
                <div className="card-body"><a className="badge badge-primary px-2" href="#">Label</a>
                  <h5 className="card-title my-2"><a href="#">How Our ICO Almost Failed</a></h5>
                  <p className="small text-muted">This is a short story about how we uncovered an insane problem with our ICO, fixed it, and still managed to secure vast funding.</p><a href="#">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
                

                
      <section className="py-5">
        <div className="container">
          <h2 className="mb-5 text-center">Thousands of happy companies</h2>
          <div className="row">
            <div className="col-6 col-sm-4 col-md-2 mb-4"><img className="img-fluid" src="https://bootstrapshuffle.com/placeholder/logos/gitscape.svg" alt=""/></div>
            <div className="col-6 col-sm-4 col-md-2 mb-4"><img className="img-fluid" src="https://bootstrapshuffle.com/placeholder/logos/k-hole.svg" alt=""/></div>
            <div className="col-6 col-sm-4 col-md-2 mb-4"><img className="img-fluid" src="https://bootstrapshuffle.com/placeholder/logos/tholio.svg" alt=""/></div>
            <div className="col-6 col-sm-4 col-md-2 mb-4"><img className="img-fluid" src="https://bootstrapshuffle.com/placeholder/logos/plucky.svg" alt=""/></div>
            <div className="col-6 col-sm-4 col-md-2 mb-4"><img className="img-fluid" src="https://bootstrapshuffle.com/placeholder/logos/1stsight.svg" alt=""/></div>
            <div className="col-6 col-sm-4 col-md-2 mb-4"><img className="img-fluid" src="https://bootstrapshuffle.com/placeholder/logos/realweb.svg" alt=""/></div>
          </div>
        </div>
      </section>
                
      <section className="py-5">
        <div className="container">
          <h2 className="mb-5 text-center">Frequently Asked Questions</h2>
          <div className="row">
            <div className="col-lg-6">
              <h4 className="mb-3">Our product</h4>
              <div className="accordion" id="faq-accordion-left-05">
                <div className="mb-2 border-bottom">
                  <h5 id="faq-heading-left1-05">
                    <button className="btn btn-link btn-block text-left px-0 d-flex" type="button" data-toggle="collapse" data-target="#faq-collapse-left1-05" aria-expanded="false" aria-controls="faq-collapse-left1-05">How is a decentralized network different from the traditional web?<img className="p-1 ml-auto my-auto" src="placeholder/icons/chevron-circle-down.svg" alt=""/></button>
                  </h5>
                  <div className="collapse" id="faq-collapse-left1-05" aria-labelledby="faq-heading-left1-05" data-parent="#faq-accordion-left-05">
                    <p>Decentralization is a key aspect of PiperNet. Traditionally, to access data on a website, you needed to connect to a single server containing that data. This method of storing data makes it easy for third parties to get access to it, corrupt it or even delete it. In PiperNet it is securely stored on multiple devices in the network, which makes it harder to hack and interfere with your data.</p>
                  </div>
                </div>
                <div className="mb-2 border-bottom">
                  <h5 id="faq-heading-left2-05">
                    <button className="btn btn-link btn-block text-left px-0 d-flex" type="button" data-toggle="collapse" data-target="#faq-collapse-left2-05" aria-expanded="false" aria-controls="faq-collapse-left2-05">Why shouldn't I just store my data on a Hooli Box?<img className="p-1 ml-auto my-auto" src="placeholder/icons/chevron-circle-down.svg" alt=""/></button>
                  </h5>
                  <div className="collapse" id="faq-collapse-left2-05" aria-labelledby="faq-heading-left2-05" data-parent="#faq-accordion-left-05">
                    <p>That's just the thing - if you store your data in a single place, like Gavin Belsons' poorly-made server box, your data will very susceptible to hacking. Whereas on PiperNet, your data is safe with many copies to back it up from.</p>
                  </div>
                </div>
                <div className="mb-2 border-bottom">
                  <h5 id="faq-heading-left3-05">
                    <button className="btn btn-link btn-block text-left px-0 d-flex" type="button" data-toggle="collapse" data-target="#faq-collapse-left3-05" aria-expanded="false" aria-controls="faq-collapse-left3-05">What makes PiperNet so safe?<img className="p-1 ml-auto my-auto" src="placeholder/icons/chevron-circle-down.svg" alt=""/></button>
                  </h5>
                  <div className="collapse" id="faq-collapse-left3-05" aria-labelledby="faq-heading-left3-05" data-parent="#faq-accordion-left-05">
                    <p>Our proprietary middle-out compression algorithm allows data to flow so fast that it can't be hacked! But, in all seriousness, the algorithm helps but it's the public, immutable ledger that makes it secure. This enables PiperNet users to exchange data without risk of it being intercepted by third parties.</p>
                  </div>
                </div>
                <div className="mb-2 border-bottom">
                  <h5 id="faq-heading-left4-05">
                    <button className="btn btn-link btn-block text-left px-0 d-flex" type="button" data-toggle="collapse" data-target="#faq-collapse-left4-05" aria-expanded="false" aria-controls="faq-collapse-left4-05">How long does it take to get a company up and running on PiperNet?<img className="p-1 ml-auto my-auto" src="placeholder/icons/chevron-circle-down.svg" alt=""/></button>
                  </h5>
                  <div className="collapse" id="faq-collapse-left4-05" aria-labelledby="faq-heading-left4-05" data-parent="#faq-accordion-left-05">
                    <p>Access to the public network is granted within a day, but moving all your data and integrating your existing software depends on how big your company is. Startups can expect to be fully online within a week, enterprises can take up to a month due to large reliance on legacy systems and huge datasets.</p>
                  </div>
                </div>
                <div className="mb-2 border-bottom">
                  <h5 id="faq-heading-left5-05">
                    <button className="btn btn-link btn-block text-left px-0 d-flex" type="button" data-toggle="collapse" data-target="#faq-collapse-left5-05" aria-expanded="false" aria-controls="faq-collapse-left5-05">How is a decentralized network different from the traditional web?<img className="p-1 ml-auto my-auto" src="placeholder/icons/chevron-circle-down.svg" alt=""/></button>
                  </h5>
                  <div className="collapse" id="faq-collapse-left5-05" aria-labelledby="faq-heading-left5-05" data-parent="#faq-accordion-left-05">
                    <p>Decentralization is a key aspect of PiperNet. Traditionally, to access data on a website, you needed to connect to a single server containing that data. This method of storing data makes it easy for third parties to get access to it, corrupt it or even delete it. In PiperNet it is securely stored on multiple devices in the network, which makes it harder to hack and interfere with your data.</p>
                  </div>
                </div>
                <div className="mb-2 border-bottom">
                  <h5 id="faq-heading-left6-05">
                    <button className="btn btn-link btn-block text-left px-0 d-flex" type="button" data-toggle="collapse" data-target="#faq-collapse-left6-05" aria-expanded="false" aria-controls="faq-collapse-left6-05">Why shouldn't I just store my data on a Hooli Box?<img className="p-1 ml-auto my-auto" src="placeholder/icons/chevron-circle-down.svg" alt=""/></button>
                  </h5>
                  <div className="collapse" id="faq-collapse-left6-05" aria-labelledby="faq-heading-left6-05" data-parent="#faq-accordion-left-05">
                    <p>That's just the thing - if you store your data in a single place, like Gavin Belsons' poorly-made server box, your data will very susceptible to hacking. Whereas on PiperNet, your data is safe with many copies to back it up from.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <h4 className="mb-3">Payment options</h4>
              <div className="accordion" id="faq-accordion-right-05">
                <div className="mb-2 border-bottom">
                  <h5 id="faq-heading-right1-05">
                    <button className="btn btn-link btn-block text-left px-0 d-flex" type="button" data-toggle="collapse" data-target="#faq-collapse-right1-05" aria-expanded="false" aria-controls="faq-collapse-right1-05">How is a decentralized network different from the traditional web?<img className="p-1 ml-auto my-auto" src="placeholder/icons/chevron-circle-down.svg" alt=""/></button>
                  </h5>
                  <div className="collapse" id="faq-collapse-right1-05" aria-labelledby="faq-heading-right1-05" data-parent="#faq-accordion-right-05">
                    <p>Decentralization is a key aspect of PiperNet. Traditionally, to access data on a website, you needed to connect to a single server containing that data. This method of storing data makes it easy for third parties to get access to it, corrupt it or even delete it. In PiperNet it is securely stored on multiple devices in the network, which makes it harder to hack and interfere with your data.</p>
                  </div>
                </div>
                <div className="mb-2 border-bottom">
                  <h5 id="faq-heading-right2-05">
                    <button className="btn btn-link btn-block text-left px-0 d-flex" type="button" data-toggle="collapse" data-target="#faq-collapse-right2-05" aria-expanded="false" aria-controls="faq-collapse-right2-05">Why shouldn't I just store my data on a Hooli Box?<img className="p-1 ml-auto my-auto" src="placeholder/icons/chevron-circle-down.svg" alt=""/></button>
                  </h5>
                  <div className="collapse" id="faq-collapse-right2-05" aria-labelledby="faq-heading-right2-05" data-parent="#faq-accordion-right-05">
                    <p>That's just the thing - if you store your data in a single place, like Gavin Belsons' poorly-made server box, your data will very susceptible to hacking. Whereas on PiperNet, your data is safe with many copies to back it up from.</p>
                  </div>
                </div>
                <div className="mb-2 border-bottom">
                  <h5 id="faq-heading-right3-05">
                    <button className="btn btn-link btn-block text-left px-0 d-flex" type="button" data-toggle="collapse" data-target="#faq-collapse-right3-05" aria-expanded="false" aria-controls="faq-collapse-right3-05">What makes PiperNet so safe?<img className="p-1 ml-auto my-auto" src="placeholder/icons/chevron-circle-down.svg" alt=""/></button>
                  </h5>
                  <div className="collapse" id="faq-collapse-right3-05" aria-labelledby="faq-heading-right3-05" data-parent="#faq-accordion-right-05">
                    <p>Our proprietary middle-out compression algorithm allows data to flow so fast that it can't be hacked! But, in all seriousness, the algorithm helps but it's the public, immutable ledger that makes it secure. This enables PiperNet users to exchange data without risk of it being intercepted by third parties.</p>
                  </div>
                </div>
                <div className="mb-2 border-bottom">
                  <h5 id="faq-heading-right4-05">
                    <button className="btn btn-link btn-block text-left px-0 d-flex" type="button" data-toggle="collapse" data-target="#faq-collapse-right4-05" aria-expanded="false" aria-controls="faq-collapse-right4-05">How long does it take to get a company up and running on PiperNet?<img className="p-1 ml-auto my-auto" src="placeholder/icons/chevron-circle-down.svg" alt=""/></button>
                  </h5>
                  <div className="collapse" id="faq-collapse-right4-05" aria-labelledby="faq-heading-right4-05" data-parent="#faq-accordion-right-05">
                    <p>Access to the public network is granted within a day, but moving all your data and integrating your existing software depends on how big your company is. Startups can expect to be fully online within a week, enterprises can take up to a month due to large reliance on legacy systems and huge datasets.</p>
                  </div>
                </div>
                <div className="mb-2 border-bottom">
                  <h5 id="faq-heading-right5-05">
                    <button className="btn btn-link btn-block text-left px-0 d-flex" type="button" data-toggle="collapse" data-target="#faq-collapse-right5-05" aria-expanded="false" aria-controls="faq-collapse-right5-05">How is a decentralized network different from the traditional web?<img className="p-1 ml-auto my-auto" src="placeholder/icons/chevron-circle-down.svg" alt=""/></button>
                  </h5>
                  <div className="collapse" id="faq-collapse-right5-05" aria-labelledby="faq-heading-right5-05" data-parent="#faq-accordion-right-05">
                    <p>Decentralization is a key aspect of PiperNet. Traditionally, to access data on a website, you needed to connect to a single server containing that data. This method of storing data makes it easy for third parties to get access to it, corrupt it or even delete it. In PiperNet it is securely stored on multiple devices in the network, which makes it harder to hack and interfere with your data.</p>
                  </div>
                </div>
                <div className="mb-2 border-bottom">
                  <h5 id="faq-heading-right6-05">
                    <button className="btn btn-link btn-block text-left px-0 d-flex" type="button" data-toggle="collapse" data-target="#faq-collapse-right6-05" aria-expanded="false" aria-controls="faq-collapse-right6-05">Why shouldn't I just store my data on a Hooli Box?<img className="p-1 ml-auto my-auto" src="placeholder/icons/chevron-circle-down.svg" alt=""/></button>
                  </h5>
                  <div className="collapse" id="faq-collapse-right6-05" aria-labelledby="faq-heading-right6-05" data-parent="#faq-accordion-right-05">
                    <p>That's just the thing - if you store your data in a single place, like Gavin Belsons' poorly-made server box, your data will very susceptible to hacking. Whereas on PiperNet, your data is safe with many copies to back it up from.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  </body>

  <Footer>

  </Footer>
            </>
        );
    }
}

export default muenster;