import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ResumeButtonContainer } from './styles';

interface ResumeButtonProps {
  text: string;
}

const ResumeButton: React.FC<ResumeButtonProps> = ({ text }) => {
  return (
    <ResumeButtonContainer
      variant="contained"
      size="large"
      color="secondary"
      endIcon={<ArrowForwardIcon />}
    >
      {text}
    </ResumeButtonContainer>
  );
};

export default ResumeButton;
