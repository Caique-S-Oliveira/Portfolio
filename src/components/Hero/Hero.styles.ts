import styled from 'styled-components';

export const HeroSection = styled.section`
  max-width: 900px;
  margin: 48px auto 0 auto;
  text-align: center;
  padding: 0 16px;
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 18px;
  line-height: 1.15;
`;

export const Subtitle = styled.p`
  font-size: 1.15rem;
  color: #e0e0e0;
  margin-bottom: 32px;
  line-height: 1.5;
`;

export const HeroButton = styled.button`
  background: #fff;
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
    background: #00ff90;
    color: #121212;
  }
`;