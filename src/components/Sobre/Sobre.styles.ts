import styled from 'styled-components';

export const SobreSection = styled.section`
  max-width: 900px;
  margin: 56px auto 0 auto;
  padding: 0 16px;
  text-align: center;
`;

export const SobreTitle = styled.h2`
  font-size: 2.1rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 18px;
`;

export const SobreTexto = styled.p`
  font-size: 1.13rem;
  color: #e0e0e0;
  margin-bottom: 28px;
  line-height: 1.6;
`;

export const SobreConvite = styled.p`
  font-size: 1.08rem;
  color: #fff;
  margin-bottom: 18px;
`;

export const SobreButton = styled.button`
  background: #00ff90;
  color: #121212;
  border: none;
  border-radius: 24px;
  padding: 10px 32px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #fff;
    color: #00ff90;
  }
`;