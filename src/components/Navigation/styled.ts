import styled from '@modern-js/runtime/styled';

export const Navigation = styled.div<any>`
  display: flex;
  flex-direction: column;
  padding: 8px;
  min-width: 280px;
  width: 280px;
  position: relative;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  gap: 12px;
  flex-direction: column;
  position: sticky;
  top: 102px;
  left: 0;
`;

export const NavigationItem = styled.li<any>`
  padding-right: 24px;
  padding-top: 4px;
  padding-bottom: 4px;
  > a {
    color: ${props => (props.active ? '#000' : '#ccc')};
    position: relative;
    transition: all 0.1s linear;
    ${props =>
      props.active
        ? `
        font-size: 24px;
        font-weight: 500;
        font-family: 'EB Garamond', serif;
        `
        : ''}
    &:before {
      position: absolute;
      left: -12px;
      top: 50%;
      transform: translate(-50%, -50%);
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--primary-color);
      display: ${props => (props.active ? 'flex' : 'none')};
    }
    &:hover {
      text-decoration: underline;
      color: #000;
    }
  }
`;
