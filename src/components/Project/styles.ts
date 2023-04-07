import styled from '@emotion/styled';
import { motion } from 'framer-motion/dist/framer-motion';
import { lighten } from 'polished';
import { colors } from '../../styles/theme';

interface ContentContainerProps {
  imageURL: string;
}

export const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background_300};
  border-radius: 8px;
  transition: transform 0.4s ease-in-out;
  :hover {
    transform: translateY(-10px);
  }
`;

export const ImageContainer = styled.div<ContentContainerProps>`
  width: 100%;
  height: 124px;
  background: url(${(props) => props.imageURL}) no-repeat center;
  background-size: cover;
  border-radius: 8px 8px 0 0;
`;

export const TextContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Stacks = styled.p`
  min-height: 80px;
`;

export const LinkContent = styled.div`
  display: flex;
  gap: 8px;

  &:hover {
    color: ${lighten(0.2, colors.primary_400)};
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 64px;
`;
