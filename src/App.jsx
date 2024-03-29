import './App.css'
import './scss/resume.scss'
function App() {


  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <span class="d-block d-lg-none">Akshay Ghodke</span>
          <span class="d-none d-lg-block">
            <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="akki.jpg" alt="" />
          </span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#education">Education</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container-fluid p-0">

        <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
          <div class="my-auto">
            <h1 class="mb-0">Akshay
              <span class="text-primary">Ghodke</span>
            </h1>
            <div class="subheading mb-5">BT Kawade Road, Ghorpadi, Pune (411 036)
              <a href="mailto:akshayghodke007@gmail.com">akshayghodke007@gmail.com</a>
            </div>
            <p class="mb-5">I am an experienced Fullstack developer (MERN stack). Currently working with Harman International as a devloper. I love solving problems and doing so through coding is what I live for.
            Always up for learning something new and a quick adaptaion to new technologies</p>
            <ul class="list-inline list-social-icons mb-0">
              <li class="list-inline-item">
                <a href="https://www.facebook.com/akshay.ghodke2" target='_blank'>
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fakshayg7a" target='_blank'>
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.linkedin.com/in/akshay-ghodke-65a127166?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://github.com/akshay1996-bit" target='_blank'>
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
          <div class="my-auto">
            <h2 class="mb-5">Experience</h2>

            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">Senior Web Developer</h3>
                <div class="subheading mb-3">Smartcloud Infofusion Pvt Ltd</div>
                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">March 2022 - Present</span>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">Web Developer</h3>
                <div class="subheading mb-3">Alpha OBS LLP</div>
                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">June 2021 - March 2022</span>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">Engineer</h3>
                <div class="subheading mb-3">Tech Mahindra</div>
                <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">December 2020 - June 2021</span>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">Project Engineer</h3>
                <div class="subheading mb-3">Winspiration Engineering Pvt Ltd</div>
                <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">August 2019 - November 2020</span>
              </div>
            </div>

          </div>

        </section>

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
          <div class="my-auto">
            <h2 class="mb-5">Education</h2>

            <div class="resume-item d-flex flex-column flex-md-row mb-5">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">MIT Academy of Engineering</h3>
                <div class="subheading mb-3">Bachelor of Engineering</div>
                {/* <div>Computer Science - Web Development Track</div> */}
                <p>Percentage: 67 (First Class with Distinction)</p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">August 2014 - May 2018</span>
              </div>
            </div>

            {/* <div class="resume-item d-flex flex-column flex-md-row">
              <div class="resume-content mr-auto">
                <h3 class="mb-0">Army Public School</h3>
                <div class="subheading mb-3">Technology Magnet Program</div>
                <p>GPA: 3.56</p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">August 2002 - May 2006</span>
              </div>
            </div> */}

          </div>
        </section>

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
          <div class="my-auto">
            <h2 class="mb-5">Skills</h2>

            <div class="subheading mb-3">Programming Languages &amp; Tools</div>
            <ul class="list-inline list-icons">
              <li class="list-inline-item">
                <i class="devicons devicons-html5"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-css3"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-javascript"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-jquery"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-sass"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-less"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-bootstrap"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-wordpress"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-grunt"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-gulp"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicons devicons-npm"></i>
              </li>
            </ul>

            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-0">
              <li>
                <i class="fa-li fa fa-check"></i>
                Mobile-First, Responsive Design</li>
              <li>
                <i class="fa-li fa fa-check"></i>
                Cross Browser Testing &amp; Debugging</li>
              <li>
                <i class="fa-li fa fa-check"></i>
                Cross Functional Teams</li>
              <li>
                <i class="fa-li fa fa-check"></i>
                Agile Development &amp; Scrum</li>
            </ul>
          </div>
        </section>

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
          <div class="my-auto">
            <h2 class="mb-5">Interests</h2>
            <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skiier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
            <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technolgy advancements in the front-end web development world.</p>
          </div>
        </section>

        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
          <div class="my-auto">
            <h2 class="mb-5">Awards &amp; Certifications</h2>
            <ul class="fa-ul mb-0">
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>
                Google Analytics Certified Developer</li>
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>
                Mobile Web Specialist - Google Certification</li>
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>
                1<sup>st</sup>
                Place - University of Colorado Boulder - Emerging Tech Competition 2009</li>
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>
                1<sup>st</sup>
                Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)</li>
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>
                2<sup>nd</sup>
                Place - University of Colorado Boulder - Emerging Tech Competition 2008</li>
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>
                1<sup>st</sup>
                Place - James Buchanan High School - Hackathon 2006</li>
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>
                3<sup>rd</sup>
                Place - James Buchanan High School - Hackathon 2005</li>
            </ul>
          </div>
        </section>

      </div>
    </>
  )
}

export default App
