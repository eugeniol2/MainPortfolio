import styled from '@emotion/styled';
import { lighten } from 'polished';
import { Link } from '@mui/material';
import { colors } from '../../styles/theme';

export const NavLinkContainer = styled.div``;

interface MaterialUiNavLinkProps {
  isActive: boolean;
}
export const MaterialUiNavLink = styled(Link)<MaterialUiNavLinkProps>`
  color: ${(props) =>
    props.isActive ? colors.primary_200 : colors.primary_400};
  transition: 0.5s;
  font-family: 'inter';
  font-size: 24px;
  &:hover {
    color: ${(props) =>
      props.isActive
        ? lighten(0.2, colors.primary_200)
        : lighten(0.2, colors.primary_400)};
  }
`;
