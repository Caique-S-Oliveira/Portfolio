import { HeaderContainer, Logo, Nav } from './Header.styles';

const handleScroll = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>CAIQUE OLIVEIRA</Logo>
      <Nav>
        <ul>
          <li onClick={() => handleScroll('sobre')}>Sobre</li>
          <li onClick={() => handleScroll('projetos')}>Projetos</li>
          <li>
            <a
              href="https://www.linkedin.com/in/caique-oliveira-54966a233/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;