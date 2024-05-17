import styled from '@modern-js/runtime/styled';

export const Header = styled.div<any>`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 22px 0px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  @media (max-width: 1024px) {
    padding: 6px 8px;
  }
  .start {
  }
  .end {
    gap: 8px;
    display: flex;
    align-items: center;
    color: var(--primary-color);
  }
`;
