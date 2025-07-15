import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 0 1.5rem 0;
  background: transparent;
  color: #fff;
  border-bottom: 2px solid #fff;
  position: static;
  box-shadow: none;
`;

export const Logo = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 2px;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    gap: 2.5rem;
    list-style: none;

    li {
      font-size: 1.1rem;
      cursor: pointer;
      font-weight: 500;
      transition: color 0.2s;
      position: relative;

      &:hover {
        color: #00ff90;
      }

      &::after {
        content: '';
        position: absolute;
        width: 0%;
        height: 2px;
        background: #00ff90;
        left: 0;
        bottom: -4px;
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`;