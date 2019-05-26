import React from 'react';

const Footer = () => {
    return (
        <>
        <footer class="py-4">
        <div class="container text-center text-lg-left">
          <div class="row d-flex justify-content-between flex-column flex-lg-row align-items-center align-items-lg-start">
            <div class="d-flex flex-column col-10 col-lg-5 pl-0">
              <h5><a href="/">Pied Piper</a></h5>
              <p>Let's get you connected! We've designed a simple, efficient process for companies migrating to PiperNet. Here's how it works.</p>
              <ul class="list-inline d-flex mb-3 justify-content-center justify-content-lg-start">
                <li class="px-2"><a href="/"><img src="placeholder/icons/twitter.svg" alt=""/></a></li>
                <li class="px-2"><a href="/"><img src="placeholder/icons/facebook-official.svg" alt=""/></a></li>
                <li class="px-2"><a href="/"><img src="placeholder/icons/instagram.svg" alt=""/></a></li>
              </ul>
            </div>
            <div>
              <h6>Products</h6>
              <ul class="list-inline ml-0">
                <li class="py-1"><a href="/">Features</a></li>
                <li class="py-1"><a href="/">Enterprise</a></li>
                <li class="py-1"><a href="/">Support</a></li>
                <li class="py-1"><a href="/">ICO</a></li>
              </ul>
            </div>
            <div>
              <h6>About Pied Piper</h6>
              <ul class="list-inline ml-">
                <li class="py-1"><a href="/">Our team</a></li>
                <li class="py-1"><a href="/">Careers</a></li>
                <li class="py-1"><a href="/">Press</a></li>
                <li class="py-1"><a href="/">Stores</a></li>
              </ul>
            </div>
            <div>
              <h6>Contact</h6>
              <ul class="list-inline ml-0">
                <li class="py-1"><a href="/">pay-the-piper@piedpiper.com</a></li>
                <li class="py-1"><a href="/">555-05-555</a></li>
                <li class="py-1"><a href="/">Pied Piper HQ - 59 Silicon Av.</a></li>
              </ul>
            </div>
            <div class="w-100 border-top my-3"></div>
          </div>
          <div class="flex-column flex-sm-row align-items-center justify-content-sm-between"><a href="/">Terms and conditions</a>
            <p class="mb-0 small text-muted">&copy; 2019 Pied Piper. All right reserved.</p>
          </div>
        </div>
      </footer>
        </>
    );
};

export default Footer;