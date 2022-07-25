import styled from '@emotion/styled';
import { motion } from 'framer-motion/dist/framer-motion';

export const Container = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* padding-top: 32px; */
  height: 72px;
  display: flex;

  top: 0;
  z-index: 100;
  position: sticky;

  > img {
    position: absolute;
    left: 0;
  }
`;
export const MenuOptions = styled.div`
  display: flex;
  position: absolute;

  align-self: center;
  gap: 16px;

  h4:hover {
    cursor: pointer;
  }

  > h4 {
    font-family: 'inter';
  }
`;
