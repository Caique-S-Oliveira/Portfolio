import styled from 'styled-components';

export const FooterContainer = styled.footer`
  max-width: 1100px;
  margin: 48px auto 0 auto;
  padding: 24px 16px 8px 16px;
  text-align: center;
  border-top: 2px solid #fff;
`;

export const FooterText = styled.p`
  color: #e0e0e0;
  font-size: 0.98rem;
  margin-bottom: 12px;
`;

export const FooterIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-bottom: 8px;
`;

export const IconLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #181818;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  transition: background 0.2s;

  &:hover {
    background: #00ff90;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #fff;
    transition: fill 0.2s;
  }

  &:hover svg {
    fill: #121212;
  }
`;