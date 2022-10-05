import styled from '@emotion/styled';
import { motion } from 'framer-motion/dist/framer-motion';
import { colors } from '../../styles/theme';

interface ContentContainerProps {
  imageURL: string;
}

// export const Container = styled.div`
//   width: 50%;
//   height: 320px;
//   display: flex;
//   gap: 24px;
//   align-self: flex-start;
//   background-color: green;
//   &:nth-child(even) {
//     flex-direction: row-reverse;
//     align-self: flex-end;
//   }
//   cursor: pointer;
// `;

export const Container = styled(motion.div)`
  width: 334px;
  height: 400px;
  display: flex;
  /* gap: 16px; */
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
`;
