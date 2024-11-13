const App = () => {
  return (
    <div>
      <title>Civic - CV Resume</title>
      <meta charSet="UTF-8" />
      <meta name="description" content="Civic - CV Resume" />
      <meta name="keywords" content="resume, civic, onepage, creative, html" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Favicon */}
      <link href="img/favicon.ico" rel="shortcut icon" />
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,400i,600,600i,700"
        rel="stylesheet"
      />
      {/* Stylesheets */}
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link rel="stylesheet" href="css/font-awesome.min.css" />
      <link rel="stylesheet" href="css/flaticon.css" />
      <link rel="stylesheet" href="css/owl.carousel.css" />
      <link rel="stylesheet" href="css/magnific-popup.css" />
      <link rel="stylesheet" href="css/style.css" />
      {/*[if lt IE 9]>
	  
	  
	<![endif]*/}
      {/* Page Preloder */}
      <div id="preloder">
        <div className="loader" />
      </div>
      <div className="home-four-style">
        {/* Header section start */}
        <header className="header-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div className="site-logo">
                  <h2>
                    <a href="#">Civic</a>
                  </h2>
                  <p>Enhance your online presence</p>
                </div>
              </div>
              <div className="col-md-8 text-md-right header-buttons">
                <a href="#" className="site-btn">
                  Download CV
                </a>
                <a href="#" className="site-btn">
                  Discover me
                </a>
              </div>
            </div>
          </div>
        </header>
        {/* Header section end */}
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-xl-5 col-lg-5 p-0">
              <div className="main-left-area h-100">
                {/* hero section */}
                <section className="intro-section">
                  <figure className="hero-image">
                    <img src="img/hero-3.jpg" alt />
                  </figure>
                  <div className="hero-text">
                    <h2>
                      Maria
                      <br />
                      Williams
                    </h2>
                    <p>
                      I’m a digital designer in love with photography, painting
                      and discovering new worlds and cultures.
                    </p>
                  </div>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse consectetur eget felis et volutpat. Integer id
                    nulla at diam eleifend fringilla. Donec eu ornare libero.
                    Fusce pulvinar magna id pharetra laoreet. Donec convallis
                    cursus libero. Nam semper risus sit amet rhoncus maximus.
                    Integer eros ante, convallis sit amet vulputate nec,
                    molestie vitae nisi. Phasellus convallis augue vel rhoncus
                    congue. Morbi interdum molestie orci sed ullamcorper.
                    Vivamus aliquet eros ut leo luctus, a venenatis metus
                    faucibus. Maecenas ipsum nisi, iaculis in orci vel, molestie
                    gravida erat.{" "}
                  </p>
                  <div className="hero-info pt-5">
                    <h2>General Info</h2>
                    <ul>
                      <li>
                        <span>Date of Birth</span>Aug 25, 1988
                      </li>
                      <li>
                        <span>Address</span>Rosia Road 55, Gibraltar, UK
                      </li>
                      <li>
                        <span>E-mail</span>mariawilliams@company.com
                      </li>
                      <li>
                        <span>Phone </span>+43 5266 22 345
                      </li>
                    </ul>
                  </div>
                </section>
                {/* extra section */}
                <section className="extra-section spad">
                  <div className="section-title">
                    <h2>Extra Skills</h2>
                  </div>
                  <div className="row">
                    <div className="col-md-6 text-center">
                      <div className="fact-box trans">
                        <div className="fact-content">
                          <div className="circle-progress">
                            <div id="progress3" className="prog-circle" />
                            <div className="progress-info">
                              <h2>75%</h2>
                            </div>
                            <div className="prog-title">
                              <h3>Inspiration</h3>
                              <p>Etiam nec odio vestibulum est.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 text-center">
                      <div className="fact-box trans">
                        <div className="fact-content">
                          <div className="circle-progress">
                            <div id="progress4" className="prog-circle" />
                            <div className="progress-info">
                              <h2>83%</h2>
                            </div>
                            <div className="prog-title">
                              <h3>Inspiration</h3>
                              <p>Etiam nec odio vestibulum est.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="fact-box">
                        <div className="fact-content">
                          <img src="img/icon/1-w.png" alt />
                          <h2>14</h2>
                          <p>Years of Experience</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="fact-box">
                        <div className="fact-content">
                          <img src="img/icon/2-w.png" alt />
                          <h2>9</h2>
                          <p>Awards Won</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* language skill section */}
                <section className="language-section spad">
                  <div className="section-title">
                    <h2>Languages</h2>
                  </div>
                  <ul className="language-progress">
                    <li>
                      English <div className="lan-prog" data-lanprogesss={5} />
                    </li>
                    <li>
                      Spanish <div className="lan-prog" data-lanprogesss={4} />
                    </li>
                    <li>
                      Chinesse <div className="lan-prog" data-lanprogesss={3} />
                    </li>
                  </ul>
                </section>
                <div className="social-links">
                  <a href>
                    <i className="fa fa-pinterest" />
                  </a>
                  <a href>
                    <i className="fa fa-linkedin" />
                  </a>
                  <a href>
                    <i className="fa fa-instagram" />
                  </a>
                  <a href>
                    <i className="fa fa-facebook" />
                  </a>
                  <a href>
                    <i className="fa fa-twitter" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="main-right-area">
                {/* Resume section start */}
                <section className="resume-section spad pt-0">
                  <div className="section-title">
                    <h2>Work Experience</h2>
                  </div>
                  <ul className="resume-list">
                    <li>
                      <h2>2016-Present</h2>
                      <h3>Web Design Company</h3>
                      <h4>Web Designer</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed porttitor orci ut sapien scelerisque viverra. Sed
                        trist ique justo nec mauris efficitur, ut lacinia elit
                        dapibus. In egestas elit in dap ibus laoreet. Duis magna
                        libero, fermentum ut facilisis id, pulvinar eget tortor.
                        Vestibulum pelle ntesque tincidunt lorem, vitae euismod
                        felis porttitor sed.{" "}
                      </p>
                    </li>
                    <li>
                      <h2>2014-2016</h2>
                      <h3>Web Design Company</h3>
                      <h4>Web Designer</h4>
                      <p>
                        Sit amet, consectetur adipiscing elit. Sed porttitor
                        orci ut sapien scelerisque viverra. Sed trist ique justo
                        nec mauris efficitur, ut lacinia elit dapibus. In
                        egestas elit in dap ibus laoreet. Duis magna libero,
                        fermentum ut facilisis id, pulvinar eget tortor.
                        Vestibulum pelle ntesque tincidunt lorem, vitae euismod
                        felis porttitor sed.{" "}
                      </p>
                    </li>
                  </ul>
                </section>
                {/* Resume section end */}
                {/* Resume section start */}
                <section className="resume-section">
                  <div className="section-title">
                    <h2>Education</h2>
                  </div>
                  <ul className="resume-list">
                    <li>
                      <h2>2008</h2>
                      <h3>Ui/Ux Diploma</h3>
                      <h4>Design College California</h4>
                      <p>
                        Sit amet, consectetur adipiscing elit. Sed porttitor
                        orci ut sapien scelerisque viverra. Sed trist ique justo
                        nec mauris efficitur, ut lacinia elit dapibus. In
                        egestas elit in dap ibus laoreet. Duis magna libero,
                        fermentum ut facilisis id, pulvinar eget tortor.
                        Vestibulum pelle ntesque tincidunt lorem, vitae euismod
                        felis porttitor sed.{" "}
                      </p>
                    </li>
                    <li>
                      <h2>2006</h2>
                      <h3>Web design Diploma</h3>
                      <h4>Design College California</h4>
                      <p>
                        Sit amet, consectetur adipiscing elit. Sed porttitor
                        orci ut sapien scelerisque viverra. Sed trist ique justo
                        nec mauris efficitur, ut lacinia elit dapibus. In
                        egestas elit in dap ibus laoreet. Duis magna libero,
                        fermentum ut facilisis id, pulvinar eget tortor.
                        Vestibulum pelle ntesque tincidunt lorem, vitae euismod
                        felis porttitor sed.{" "}
                      </p>
                    </li>
                  </ul>
                </section>
                {/* Resume section end */}
                {/* Review section start */}
                <section className="review-section spad">
                  <div className="section-title">
                    <h2>References</h2>
                  </div>
                  <div className="review-slider owl-carousel">
                    <div className="single-review">
                      <div className="qut">“</div>
                      <p>
                        Sit amet, consectetur adipiscing elit. Sed porttitor
                        orci ut sapien scelerisque viverra. Sed trist ique justo
                        nec mauris efficitur, ut lacinia elit dapibus. In
                        egestas elit in dap ibus laoreet. Duis magna libero,
                        fermentum ut facilisis id, pulvinar eget tortor.
                        Vestibulum pelle ntesque tincidunt lorem, vitae euismod
                        felis porttitor sed.{" "}
                      </p>
                      <h3>Robert G. Smith</h3>
                      <h4>Manager, Company</h4>
                    </div>
                    <div className="single-review">
                      <div className="qut">“</div>
                      <p>
                        Sit amet, consectetur adipiscing elit. Sed porttitor
                        orci ut sapien scelerisque viverra. Sed trist ique justo
                        nec mauris efficitur, ut lacinia elit dapibus. In
                        egestas elit in dap ibus laoreet. Duis magna libero,
                        fermentum ut facilisis id, pulvinar eget tortor.
                        Vestibulum pelle ntesque tincidunt lorem, vitae euismod
                        felis porttitor sed.{" "}
                      </p>
                      <h3>Robert G. Smith</h3>
                      <h4>Manager, Company</h4>
                    </div>
                    <div className="single-review">
                      <div className="qut">“</div>
                      <p>
                        Sit amet, consectetur adipiscing elit. Sed porttitor
                        orci ut sapien scelerisque viverra. Sed trist ique justo
                        nec mauris efficitur, ut lacinia elit dapibus. In
                        egestas elit in dap ibus laoreet. Duis magna libero,
                        fermentum ut facilisis id, pulvinar eget tortor.
                        Vestibulum pelle ntesque tincidunt lorem, vitae euismod
                        felis porttitor sed.{" "}
                      </p>
                      <h3>Robert G. Smith</h3>
                      <h4>Manager, Company</h4>
                    </div>
                  </div>
                </section>
                {/* skill section start */}
                <div className="skill-section">
                  <div className="section-title">
                    <h2>Skills</h2>
                  </div>
                  {/* progress bars */}
                  <div className="skills">
                    <div className="single-progress-item">
                      <div className="progress-bar-style" data-progress={99} />
                      <p>Design</p>
                    </div>
                    <div className="single-progress-item">
                      <div className="progress-bar-style" data-progress={75} />
                      <p>Illsutrator</p>
                    </div>
                    <div className="single-progress-item">
                      <div className="progress-bar-style" data-progress={87} />
                      <p>Photoshop</p>
                    </div>
                    <div className="single-progress-item">
                      <div className="progress-bar-style" data-progress={60} />
                      <p>HTML</p>
                    </div>
                  </div>
                  {/* icon boxes */}
                  <div className="icon-box-area spad">
                    <div className="icon-box">
                      <i className="flaticon-032-cooking" />
                      <p>Cooking</p>
                    </div>
                    <div className="icon-box">
                      <i className="flaticon-015-photo-camera" />
                      <p>Photography</p>
                    </div>
                    <div className="icon-box">
                      <i className="flaticon-013-chess-1" />
                      <p>Playing Chess</p>
                    </div>
                    <div className="icon-box">
                      <i className="flaticon-001-yoga" />
                      <p>Yoga</p>
                    </div>
                    <div className="icon-box">
                      <i className="flaticon-035-tent" />
                      <p>Camping in nature</p>
                    </div>
                  </div>
                </div>
                {/* skill section end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer section start */}
      <footer className="footer-section">
        <div className="container text-center">
          <div className="copyright">
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | Made with{" "}
            <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
            <a href="https://colorlib.com" target="_blank" rel="noreferrer">
              Colorlib
            </a>{" "}
            &amp; distirbuted by{" "}
            <a href="https://themewagon.com" target="_blank" rel="noreferrer">
              ThemeWagon
            </a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </div>
        </div>
      </footer>
      {/* Footer section end */}
      {/*====== Javascripts & Jquery ======*/}
    </div>
  );
};

export default App;
