import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';

const circlesProps = {
  scale: [1, 2, 2, 1, 1],
  rotate: [0, 0, 270, 270, 0],
  borderRadius: ['20%', '20%', '50%', '50%', '20%'],
};

export const PortraitCircles = (): JSX.Element => {
  return (
    <motion.svg
      width="402"
      height="376"
      viewBox="0 0 402 376"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={circlesProps}
    >
      <g id="Group 4">
        <path
          id="Ellipse 1"
          d="M401.5 188C401.5 291.522 311.765 375.5 201 375.5C90.2349 375.5 0.5 291.522 0.5 188C0.5 84.4776 90.2349 0.5 201 0.5C311.765 0.5 401.5 84.4776 401.5 188Z"
          stroke="#B69EEB"
        />
        <path
          id="Ellipse 3"
          d="M356.929 201.333C356.929 297.517 278.03 375.5 180.689 375.5C83.3492 375.5 4.44949 297.517 4.44949 201.333C4.44949 105.149 83.3492 27.1667 180.689 27.1667C278.03 27.1667 356.929 105.149 356.929 201.333Z"
          stroke="#B69EEB"
        />
        <path
          id="Ellipse 2"
          d="M333.5 210C333.5 301.424 262.517 375.5 175 375.5C87.4829 375.5 16.5 301.424 16.5 210C16.5 118.576 87.4829 44.5 175 44.5C262.517 44.5 333.5 118.576 333.5 210Z"
          stroke="#B69EEB"
        />
      </g>
    </motion.svg>
  );
};

export default PortraitCircles;
