import { Fragment } from "react"
// import { useState } from "react"
import Infos from "./Infos"
import Skills from "./Skills"
import Education from "./Education"
import Experiences from "./Experiences"
import Achievements from "./Achievements"
import Projects from "./Projects"

function Resume() {

    // const [firstname, setFirstname] = useState('');
    // const [middlename, setMiddlename] = useState('');
    // const [lastname, setLastname] = useState('');
    // const [image, setImage] = useState('');
    // const [designation, setDesignation] = useState('');
    // const [address, setAddress] = useState('');
    // const [email, setEmail] = useState('');
    // const [phoneno, setPhoneno] = useState('');
    // const [summary, setSummary] = useState('');
    // const [projectsDsp, setProjectsDsp] = useState([]);
    // const [achievementsDsp, setAchievementsDsp] = useState([]);
    // const [skillsDsp, setSkillsDsp] = useState([]);
    // const [educationsDsp, setEducationsDsp] = useState([]);
    // const [experiencesDsp, setExperiencesDsp] = useState([]);

  return <Fragment>
        <section id = "about-sc" className = "">
            <div className = "container">
                <div className = "about-cnt">
                    <form action="" className="cv-form" id = "cv-form">
                        <div className = "cv-form-blk">
                                
                          <Infos />
                          <Achievements />
                          <Experiences />
                          <Education />
                          <Projects />
                          <Skills />       
                        </div>
                    </form>
                </div>
            </div>  
        </section> 
        <section id="preview-sc" className="print_area">
        <div className="container">
          <div className="preview-cnt">
            <div className="preview-cnt-l bg-green text-white">
              <div className="preview-blk">
                <div className="preview-image">
                  <img src="" alt="" id="image_dsp" />
                </div>
                <div className="preview-item preview-item-name">
                  <span
                    className="preview-item-val fw-6"
                    id="fullname_dsp"
                  ></span>
                </div>
                <div className="preview-item">
                  <span
                    className="preview-item-val text-uppercase fw-6 ls-1"
                    id="designation_dsp"
                  ></span>
                </div>
              </div>

              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>about</h3>
                </div>
                <div className="preview-blk-list">
                  <div className="preview-item">
                    <span className="preview-item-val" id="phoneno_dsp"></span>
                  </div>
                  <div className="preview-item">
                    <span className="preview-item-val" id="email_dsp"></span>
                  </div>
                  <div className="preview-item">
                    <span className="preview-item-val" id="address_dsp"></span>
                  </div>
                  <div className="preview-item">
                    <span className="preview-item-val" id="summary_dsp"></span>
                  </div>
                </div>
              </div>

              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>skills</h3>
                </div>
                <div className="skills-items preview-blk-list" id="skills_dsp">
                  {/* <!-- skills list here --> */}
                </div>
              </div>
            </div>

            <div className="preview-cnt-r bg-white">
              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>Achievements</h3>
                </div>
                <div
                  className="achievements-items preview-blk-list"
                  id="achievements_dsp"
                ></div>
              </div>

              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>educations</h3>
                </div>
                <div
                  className="educations-items preview-blk-list"
                  id="educations_dsp"
                ></div>
              </div>

              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>experiences</h3>
                </div>
                <div
                  className="experiences-items preview-blk-list"
                  id="experiences_dsp"
                ></div>
              </div>

              <div className="preview-blk">
                <div className="preview-blk-title">
                  <h3>projects</h3>
                </div>
                <div
                  className="projects-items preview-blk-list"
                  id="projects_dsp"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="print-btn-sc">
        <div className="container">
          <button type="button" className="print-btn btn btn-primary">
            Print CV
          </button>
        </div>
      </section>
  </Fragment>
}

export default Resume