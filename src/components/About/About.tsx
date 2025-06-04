import { Container } from "./styles";
import carbon from "../../assets/carboncode.png";
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import C from "../../assets/C.svg";
import Pandas from "../../assets/Pandas.svg";
import MongoDB from "../../assets/MongoDB.svg";
import FastAPI from "../../assets/FastAPI.svg";
import MySQL from "../../assets/mysql.svg";
import GitHub from "../../assets/github.svg";
import scikitlearn from "../../assets/scikitlearn.svg";
import Tensorflow from "../../assets/TensorFlow.svg";
import git from "../../assets/Git.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Sanath, a recent graduate in Artificial Intelligence and Data Science with a strong interest in solving real-world problems through AI, machine learning, and full-stack web development.


          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            During my academic journey and internships, I built hands-on experience working on AI-powered applications, backend systems, and interactive web interfaces.


          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            I'm particularly excited about the intersection of AI and practical domains like healthcare and agriculture—and I love building tools that generate impact.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4> Bachelor of Engineering in Artificial Intelligence and Data Science
            </h4>
            <p>Sahyadri College of Engineering and Management, Mangalore
              | 2021 – 2025</p>
            <p>8.93 CGPA</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>Experience:</h3><h4>AI Engineer Intern</h4>
            <p>AIRAT Systems | Jan 2025 – May 2025</p>
            <p>NIT Karnataka,Mangalore , India</p>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <br /><h4>Full Stack Developer Intern</h4>
            <p>Technical Career Education |  Oct 2023 – Nov 2023</p>
            <p>Mangalore , India</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={python} alt="python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={jsIcon} alt="javascript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={FastAPI} alt="FastAPI" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={MongoDB} alt="MongoDB" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={java} alt="java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={MySQL} alt="MySQL" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={C} alt="C" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={git} alt="git" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={scikitlearn} alt="scikitlearn" />
            </ScrollAnimation>
          </div>
            <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={Tensorflow} alt="Tensorflow" />
            </ScrollAnimation>
            </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={Pandas} alt="Pandas" />
            </ScrollAnimation>
            </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={GitHub} alt="GitHub" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={210}>
          <img src={carbon} alt="carbon" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
