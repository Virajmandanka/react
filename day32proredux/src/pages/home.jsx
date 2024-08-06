import React from 'react'
import Swiper from 'swiper';
// import 'swiper/swiper-bundle.min.css';

function Home() {
   // Initialize Swiper after the component mounts
  //  React.useEffect(() => {
  //   new Swiper('.mySwiper', {
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //   });
  // }, []);
  return (
    <div>
      <div className="men2">
        <h1 className="h1">Support a cause you care about</h1>
        <p className="q1">
          Sedac odio aliquet, fringilla odio eget, tincidunt nunc. Duis aliquet pulvinar
          ante tempor etiam lacus eros
        </p>
        <button className="but1">Active Cases</button>
      </div>

      <div className="men3">
        <h1 className="h2">Causes we are serving</h1>
      </div>

      <div className="bb">
        {/* Swiper */}
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="swiper-slide" key={index}>
                <div className="sw">
                  {Array.from({ length: 3 }).map((_, innerIndex) => (
                    <div className="sww" key={innerIndex}>
                      <div className="swww"><img src={`image/services-img${innerIndex + 1}.jpg.webp`} alt="" /></div>
                      <h2 className="h25">Help the ecosystems</h2>
                      <p className="q25 text-center">
                        Sedac odio aliiquet, fringilla odio eget,<br />
                        tincidunt nunc aliiquet pulvinar
                      </p>
                      <button className="but25">Donate</button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>

      <div className="men6">
        <div className="box1"><img src="../image/about.jpg.webp" alt="" /></div>
        <div className="box1">
          <h1 className="h3">Who we are?</h1>
          <p className="q4">
            Sedac odio aliquet, fringilla odio eget, tincidunt nunc.<br /><br />
            Duis aliquet pulvinar ante tempor etiam lacus eros
          </p><br />
          <p className="q5">
            The legal definition of a charitable organization and of<br /><br />
            charity varies between countries and in some instances<br /><br />
            regions of the country. The regulation, the tax treatment,<br /><br />
            and the way in which charity law affects charitable<br /><br />
            organizations also vary.
          </p>
          <button className="but4">Learn More</button>
        </div>
      </div>

      <div className="men7">
        {[
          { count: 35, text: 'Active Cases', icon: 'image/count-icon1.svg' },
          { count: 12, text: 'People Joined', icon: 'image/count-icon2.svg' },
          { count: 200, text: 'Cases every Year', icon: 'image/count-icon3.svg' },
          { count: 1200, text: 'People get help from us', icon: 'image/count-icon4.svg' },
        ].map((item, index) => (
          <div className="box2" key={index}>
            <div className="box3"><img src={item.icon} alt="" /></div>
            <div className="box4">
              <h1 className="counter">{item.count}</h1>
              <p className="q7">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="men8">
        <h1 className="h8">We serve for people</h1>
        <p className="q10">
          Sedac odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet
          pulvinar ante.
        </p>
      </div>

      <div className="men10">
        {[
          { title: 'Pure Food & water', icon: 'image/services1.svg' },
          { title: 'Health & Medicine', icon: 'image/services2.svg' },
          { title: 'Education', icon: 'image/services1.svg' },
        ].map((item, index) => (
          <div className="box11" key={index}>
            <div className="box12"><img src={item.icon} alt="" /></div>
            <div className="box13">
              <h1 className="hh">{item.title}</h1>
              <p className="pp">
                Odio aliquet, fringilla odio eget, tincidunt nunc duis<br />
                aliquet pulvinar ante employees and organizations<br />
                to support.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="men11">
        <div className="ganesh">
          <h1 className="hhh">They Need Your Help</h1>
          <p className="ppp">
            Sedac odio aliquet, fringilla odio eget, tincidunt nunc. Duis<br />
            aliquet pulvinar ante tempor etiam lacus eros<br /><br />
            Sedac odio aliquet, fringilla odio eget, tincidunt nunc. Duis<br />
            aliquet pulvinar ante tempor etiam lacus eros
          </p>
          <button className="ttt">Donate in a Case</button>
        </div>
      </div>

      <div className="men12">
        <div className="box15">
          <h1 className="h9">Join with Us</h1>
          <p className="q11">
            The legal definition of a charitable<br />
            organization (and of charity) varies between<br />
            countries and in some instances regions of<br />
            the country. The regulation, the tax treatment,<br />
            and the way.
          </p>
          <button className="to">Join Now</button>
        </div>
        <div className="box16"><img src="image/joining1.jpg.webp" alt="" /></div>
        <div className="box17"><img src="image/joining2.jpg.webp" alt="" /></div>
      </div>

      <footer>
        <div className="box19">
          <a href=""><img src="image/logo2_footer.png.webp" alt="" /></a>
          <p className="q13">
            Seddo eiusmod tempor incididunt ut<br />
            labore et dolore magna aliqua. Conse<br />
            ctetur pisicin elit, sed do eiusmod<br />
            tempor.
          </p>
          <i className="fa-brands fa-facebook" style={{ color: '#f1f2f4' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;
          <i className="fa-brands fa-instagram" style={{ color: '#f8f9fb' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;
          <i className="fa-brands fa-linkedin-in" style={{ color: '#f8f8f9' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;
          <i className="fa-brands fa-youtube" style={{ color: '#f8f9f9' }}></i>
        </div>
        <div className="box18">
          <h2 className="h11">Navigation</h2>
          <p className="q14">
            Home<br />
            About<br />
            Services<br />
            Blog<br />
            Contact
          </p>
        </div>
        <div className="box18">
          <h2 className="h11">Services</h2>
          <p className="q14">
            Pet Care<br />
            Pet Treatment<br />
            Pet Training<br />
            Hygienic Care
          </p>
        </div>
        <div className="box18">
          <h2 className="h11">Subscribe newsletter</h2>
          <p className="q15">
            Subscribe our newsletter to get updates about <br />
            services and offers.
          </p>
          <input className="inn" type="Email" placeholder="  Email" />
        </div>
      </footer>
    </div>
  )
}

export default Home