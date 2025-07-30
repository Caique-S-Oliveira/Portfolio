import { HeroSection, Title, Subtitle, HeroButton } from './Hero.styles';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5511949188851';
    const message = 'Olá! Gostaria de criar um site profissional como os seus.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <HeroSection>
      <Title>
        Transformo ideias em sites que
        <br />
        conectam e vendem
      </Title>
      <Subtitle>
        Sites bonitos não bastam. Eu crio experiências digitais estratégicas, com foco em design, performance e resultados reais.
      </Subtitle>
      <HeroButton onClick={handleWhatsAppClick}>
        Quero um site assim!
      </HeroButton>
    </HeroSection>
  );
};

export default Hero;