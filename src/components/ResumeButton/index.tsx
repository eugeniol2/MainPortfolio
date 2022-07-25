import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ResumeButtonContainer } from './styles';

const ResumeButton: React.FC = ({ children }) => {
  return (
    <ResumeButtonContainer
      variant="contained"
      size="large"
      color="secondary"
      endIcon={<ArrowForwardIcon />}
    >
      {children}
    </ResumeButtonContainer>
  );
};

export default ResumeButton;
