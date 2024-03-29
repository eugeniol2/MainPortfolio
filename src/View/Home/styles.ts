import styled from '@emotion/styled';
import { motion } from 'framer-motion/dist/framer-motion';

export const MainContainer = styled.div`
  margin: 0 112px 0 112px;
  position: relative;
`;

export const PageContainer = styled(motion.div)`
  display: flex;
  padding-top: 72px;
  height: 100vh;
  justify-content: center;
  scroll-snap-align: start;

  @media (min-height: 1300px) {
    min-height: 1024px;
    scroll-snap-align: none;
  }
`;
