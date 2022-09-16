import styled from '@emotion/styled';
import { motion } from 'framer-motion/dist/framer-motion';
import { colors } from '../../styles/theme';

interface ContentContainerProps {
  imageURL: string;
}

export const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: flex-end;
  height: 320px;
  margin: 64px;
`;

export const ContentContainer = styled(motion.div)<ContentContainerProps>`
  position: relative;
  height: 100%;
  width: 60%;
  background: url(${(props) => props.imageURL}) no-repeat center;
  background-size: cover;
  display: flex;
  border-radius: 8px;
  transition: 0.5s;

  cursor: pointer;
`;

export const TextContainer = styled.section`
  position: absolute;
  top: 16px;
  right: -15%;

  > h3,
  h2 {
    text-shadow: 1px 1px 2px ${colors.background_500},
      0 0 15px ${colors.secondary_200};
  }
`;

export const ProjectDescription = styled.div`
  width: 30%;
  max-height: 50%;
  min-width: 164px;
  overflow: auto;
  margin-left: 32px;
`;
