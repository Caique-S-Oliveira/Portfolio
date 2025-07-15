import {
  SobreSection,
  SobreTitle,
  SobreTexto,
  SobreConvite,
  SobreButton
} from './Sobre.styles';

const Sobre = () => (
  <SobreSection id="sobre">
    <SobreTitle>Por trás dos projetos</SobreTitle>
    <SobreTexto>
      Sou <strong>Caique Oliveira</strong>, web designer focado em criar sites que vão além da estética.<br />
      Meu trabalho une design inteligente, estratégia e performance para transformar ideias em experiências digitais que geram resultados.<br />
      Se você busca um site que realmente faça a diferença no seu negócio.
    </SobreTexto>
    <SobreConvite>Vamos conversar.</SobreConvite>
    <SobreButton>Iniciar meu projeto!</SobreButton>
  </SobreSection>
);

export default Sobre;