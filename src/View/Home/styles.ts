import styled from '@emotion/styled';
import { motion } from 'framer-motion/dist/framer-motion';

export const MainContainer = styled.div`
  margin: 0 112px 0 112px;
  height: 100%;
`;

export const PageContainer = styled(motion.div)`
  display: flex;
  padding-top: 72px;
  height: 100vh;
  scroll-snap-align: start;
`;
