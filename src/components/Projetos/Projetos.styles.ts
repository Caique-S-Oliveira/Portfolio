import styled from 'styled-components';

export const Divider = styled.hr`
  border: none;
  border-top: 2px solid #fff;
  margin: 40px auto 32px auto;
  max-width: 1100px;
  width: 100%;
  opacity: 1;
`;

export const ProjetosSection = styled.section`
  max-width: 1100px;
  margin: 48px auto 0 auto;
  padding: 0 16px;
`;

export const ProjetosTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-bottom: 18px;
  padding-bottom: 8px;
`;

export const ProjetosGrid = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-bottom: 8px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProjetoCard = styled.div`
  background: #181818;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  width: 320px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s;

  &:hover {
    transform: translateY(-16px) scale(1.05);
    box-shadow: 0 8px 32px rgba(0,0,0,0.18);
    z-index: 2;
  }
`;

export const ProjetoImg = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  background: #222;
`;

export const ProjetoNome = styled.div`
  font-size: 1.05rem;
  font-weight: 600;
  color: #fff;
  background: #121212;
  padding: 10px 0 10px 0;
  text-align: center;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(18,18,18,0.85);
  z-index: 9998;
`;

export const ProjetoImgExpandido = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 700px;
  height: auto;
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  z-index: 9999;
  box-shadow: 0 8px 32px rgba(0,0,0,0.32);
  transform: translate(-50%, -50%) scale(1);
  transition: opacity 0.3s, transform 0.3s cubic-bezier(.25,.8,.25,1);
  cursor: pointer;
`;