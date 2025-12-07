import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 1rem;
  font-family: ${theme.typography.fontFamily.primary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: 100%;
  color: ${({ theme, $disabled }) => $disabled ? theme.colors.text.text2 : theme.colors.text.text1};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
`;

export const RequiredIndicator = styled.span`
  color: ${theme.colors.error};
  margin-left: 1rem;
  font-weight: ${theme.typography.fontWeight.semibold};
`;
