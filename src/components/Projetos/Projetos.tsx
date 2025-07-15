import { useState } from 'react';
import {
  Divider,
  ProjetosSection,
  ProjetosTitle,
  ProjetosGrid,
  ProjetoCard,
  ProjetoImg,
  ProjetoNome,
  Overlay,
  ProjetoImgExpandido
} from './Projetos.styles';

const projetosData = [
  {
    nome: 'FluentX - Landing Page HTML',
    img: '/images/Desktop FluentX 2.svg',
    imgExpandido: '/images/Desktop FluentX 3.svg',
    alt: 'FluentX'
  },
  {
    nome: 'VTech - One Page Wordpress',
    img: '/images/VTech 2.svg',
    imgExpandido: '/images/VTech 3.svg',
    alt: 'VTech'
  },
  {
    nome: 'Diamond - Interface Figma',
    img: '/images/Desktop Diamond 2.svg',
    imgExpandido: '/images/Desktop Diamond 3.svg',
    alt: 'Diamond'
  }
];

const Projetos = () => {
  const [expandIdx, setExpandIdx] = useState<number | null>(null);

  return (
    <>
      <Divider />
      <ProjetosSection id="projetos">
        <ProjetosTitle>Projetos</ProjetosTitle>
        <ProjetosGrid>
          {projetosData.map((projeto, idx) => (
            <ProjetoCard key={idx} onClick={() => setExpandIdx(idx)}>
              <ProjetoImg src={projeto.img} alt={projeto.alt} />
              <ProjetoNome>{projeto.nome}</ProjetoNome>
            </ProjetoCard>
          ))}
        </ProjetosGrid>
        {expandIdx !== null && (
          <>
            <Overlay onClick={() => setExpandIdx(null)} />
            <ProjetoImgExpandido
              src={projetosData[expandIdx].imgExpandido}
              alt={projetosData[expandIdx].alt}
              onClick={() => setExpandIdx(null)}
            />
          </>
        )}
      </ProjetosSection>
      <Divider />
    </>
  );
};

export default Projetos;