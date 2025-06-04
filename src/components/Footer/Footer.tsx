import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import externallink from '../../assets/external-link.svg'
import mail from '../../assets/email.svg'

export function Footer() {
  return (
    <Container className="footer">
    
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/sanath-kumar-kunjithaya/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/Sanathkumarkunjithaya/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://drive.google.com/file/d/1wtrauKtIZQjrHGGPo-PqFYwrRkubrk-0/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <img src={externallink} alt="resume" />
        </a>
        <a
          href="mailto:kunjithayas@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={mail} alt="mail" />
        </a>
        
      </div>
    </Container>
  )
}
