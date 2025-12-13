import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 4.2rem;
  height: 4.2rem;
  background-color: ${theme.colors.gray.gray4};
  border-radius: 50%;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  svg{
    color: ${theme.colors.darkish};
  }
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.regular};
  color: ${theme.colors.text.text2};
  line-height: 100%;
  transition: color 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardAmount = styled.p`
  margin-top: 1.3rem;
  font-size: 1.8rem;
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.text1};
  line-height: 100%;
  transition: color 0.3s ease;
  word-break: break-word;
  overflow-wrap: break-word;
`;


export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  min-width: 0;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  overflow: hidden;
`;

export const CardBody = styled.div`
  flex: 1;
  margin-top: 1.6rem;
`;


export const StyledCard = styled.div`
  color: ${theme.colors.text.text2};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  padding: 2.4rem 2rem;
  border-radius: 1rem;
  background-color: ${theme.colors.gray.gray2};
  transition: all 0.3s ease;
  cursor: pointer;
  box-sizing: border-box;

  ${theme.media.md} {
    padding: 2rem 1.5rem;
  }

  ${theme.media.sm} {
    padding: 1.5rem 1rem;
  }

  &:active{
    background-color: ${theme.colors.darkish};
  }

  ${({ $clickable }) =>
    $clickable &&
    css`
      cursor: pointer;
      user-select: none;

      &:active {
        transform: translateY(0);
      }
    `}

  ${({ $hoverable }) => $hoverable && css`
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
        border-color: ${theme.colors.darkish};
        background-color: ${theme.colors.darkish};

        /* Card Amount renk değişimi - YENİ */
        ${CardAmount} {
          color: ${theme.colors.light};
        }

        /* Icon Container hover - YENİ */
        ${IconContainer} {
          background-color: #4E5257;

          svg{
            color: ${theme.colors.primary};
          }
        }



      }
    `}
`;