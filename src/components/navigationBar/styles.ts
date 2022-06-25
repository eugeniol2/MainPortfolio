import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 32px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

  > h4 {
    font-family: 'inter';
  }
`;
