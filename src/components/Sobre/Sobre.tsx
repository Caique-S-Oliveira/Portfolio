import {
  SobreSection,
  SobreTitle,
  SobreTexto,
  SobreConvite,
  SobreButton
} from './Sobre.styles';

const Sobre = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5511949188851';
    const message = 'Olá! Gostaria de criar um site profissional como os seus.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
  <SobreSection id="sobre">
    <SobreTitle>Por trás dos projetos</SobreTitle>
    <SobreTexto>
      Sou <strong>Caique Oliveira</strong>, web designer focado em criar sites que vão além da estética.<br />
      Meu trabalho une design inteligente, estratégia e performance para transformar ideias em experiências digitais que geram resultados.<br />
      Se você busca um site que realmente faça a diferença no seu negócio.
    </SobreTexto>
    <SobreConvite>Vamos conversar.</SobreConvite>
    <SobreButton onClick={handleWhatsAppClick}>Iniciar meu projeto!</SobreButton>
  </SobreSection>
);
};

export default Sobre;