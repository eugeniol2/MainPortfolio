import styled from '@emotion/styled';
import { motion } from 'framer-motion/dist/framer-motion';
import { colors } from '../../styles/theme';

interface ContentContainerProps {
  imageURL: string;
}

export const Container = styled.div`
  width: 50%;
  height: 320px;
  display: flex;
  gap: 24px;
  align-self: flex-start;
  background-color: green;
  &:nth-child(even) {
    flex-direction: row-reverse;
    align-self: flex-end;
  }
  cursor: pointer;
`;

export const ImageContainer = styled(motion.div)<ContentContainerProps>`
  width: 100%;
  background: url(${(props) => props.imageURL}) no-repeat center;
  background-size: cover;
`;

export const TextContainer = styled.div`
  width: 50%;
`;

export const Title = styled.h1`
  position: absolute;
  left: 50%;
`;
