import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Sanathkumarkunjithaya/Microbial-Insights-" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://microbialinsight-frontend.onrender.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>🌾 Microbial Insights</h3>
              <p>
                Engineered a full-stack arecanut yield prediction platform using ensemble machine learning models trained on soil, microbial, and environmental data. Integrated LLaMA 4 Scout to generate contextual summaries and provide actionable insights.




              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>FastAPI</li>
                <li>Scikit-learn</li>
                <li>XGBoost</li>
                <li>LLaMA 4 Scout</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Sanathkumarkunjithaya/ciniphiles" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                
                </div>
            </header>
            <div className="body">
              <h3>🎬 Ciniphiles: Movie Discovery Platform</h3>
              <p> Developed a scalable full-stack movie platform using the MERN stack, incorporating real-time metadata synchronization, optimized RESTful APIs, responsive UI components, and efficient CRUD operations for dynamic content discovery and management.




              </p>
            </div>
            <footer> <ul className="tech-list"> 
              <li>MongoDB </li>
               <li>Express.js</li> 
               <li> React.js</li> 
               <li> Node.js</li>
            </ul>
            
            </footer>
          </div> 
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Sanathkumarkunjithaya/hostel-management-system" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
              </div>
            </header>
            <div className="body">
              <h3>🏢 Hostel Administration Management System
              </h3>
              <p>
                Developed a Java-MySQL based hostel management system with role-based access, enabling efficient handling of student records, room assignments, and automated fee calculations through a user-friendly interface.



              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Java</li>
                <li>MySQL</li>
                <li>JDBC</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/Sanathkumarkunjithaya/Data-Analysis-Using-SQL" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Supply Chain Analytics</h3>
              <p>Developed a supply chain analytics solution using MySQL to evaluate and improve sales forecast accuracy. Calculated key metrics like Net Error, Absolute Error, and Forecast Accuracy to generate dynamic reports and support inventory optimization.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/Sanathkumarkunjithaya/Email-Spam-Detection-using-LSTM" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmartMailGuard</h3>
              <p>Implemented an LSTM-based deep learning model to classify emails as spam or not spam using natural language processing techniques. Preprocessed textual data and trained the model on labeled datasets to achieve high classification accuracy.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>TensorFlow/Keras</li>
                <li>LSTM </li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}