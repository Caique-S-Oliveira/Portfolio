import {
  FooterContainer,
  FooterText,
  FooterIcons,
  IconLink
} from './Footer.styles';

const Footer = () => (
  <FooterContainer>
    <FooterText>© 2025 Caique Oliveira. Todos os direitos reservados.</FooterText>
    <FooterIcons>
      <IconLink href="https://www.linkedin.com/in/caique-oliveira-54966a233/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24"><path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-9.5 7.5H7v7h2.5v-7zm-1.25-2a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm8.25 2h-2.5v1.25h.02V17H17v-4.25c0-2.07-2.5-1.91-2.5 0V17h2.5v-7z"/></svg>
      </IconLink>
    </FooterIcons>
  </FooterContainer>
);

export default Footer;