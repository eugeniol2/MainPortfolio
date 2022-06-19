import styled from 'styled-components';

export const Container = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: green;
  top: 0;
  z-index: 100;
  position: sticky;
`;
export const MenuOptions = styled.div`
  width: 432px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4:hover {
    cursor: pointer;
  }
`;
