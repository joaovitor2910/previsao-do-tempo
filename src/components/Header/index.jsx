import './styles.js'
import github from '../../assets/github.png'
import Linkedin from '../../assets/linkedin.png'
import { Container, Icon, Logo, NavContainer } from './styles.js'
import imageLogo from '../../assets/favicon-32x32.png'

function Header() {
    return (
      <Container>
        <Logo src={imageLogo} alt="" />
        <NavContainer>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Notícias</p>
          </li>
          <li>
            <p>Contato</p>
          </li>
          <a href="https://github.com/joaovitor2910" target="_blank">
            <Icon src={github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/joao-vitor-dos-santos-siqueira/"
            target="_blank"
          >
            <Icon src={Linkedin} alt="" />
          </a>
        </NavContainer>
      </Container>
    );
}

export default Header