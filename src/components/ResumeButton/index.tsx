import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ResumeButtonContainer } from './styles';

const ResumeButton: React.FC = ({ children }) => {
  return (
    <ResumeButtonContainer
      variant="outlined"
      size="large"
      color="primary"
      href="https://drive.google.com/file/d/17Q7WIj2kqmsDrkIU83t0l36oeLZzCpSY/view?usp=sharing"
      endIcon={<ArrowForwardIcon />}
    >
      {children}
    </ResumeButtonContainer>
  );
};

export default ResumeButton;
