import styled from '@emotion/styled';
import { motion } from 'framer-motion/dist/framer-motion';
import { lighten } from 'polished';
import { colors } from '../../styles/theme';

interface ContentContainerProps {
  imageURL: string;
}

export const Container = styled(motion.div)`
  width: 334px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background_300};
  border-radius: 8px;
`;

export const ImageContainer = styled.div<ContentContainerProps>`
  width: 100%;
  height: 174px;
  background: url(${(props) => props.imageURL}) no-repeat center;
  background-size: cover;
  border-radius: 8px 8px 0 0;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 8px;
`;

export const Title = styled.h1``;
export const Description = styled.p`
  height: 90px;
`;
export const Stacks = styled.p``;

export const LinkContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: ${lighten(0.2, colors.primary_400)};
  }
`;
