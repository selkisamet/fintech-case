import styled from 'styled-components';

export const WalletCardContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 1.2rem;
`;

export const WalletHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
`;

export const WalletTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text.text1};
`;

export const MenuButton = styled.button`
    background: none;
    border: none;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.text.text3};
    cursor: pointer;
    padding: 0;
    line-height: 1;

    &:hover {
        color: ${({ theme }) => theme.colors.text.text1};
    }
`;

export const CardsSection = styled.div`
    position: relative;
    height: 32rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
`;

export const CreditCard = styled.div`
    position: absolute;
    height: ${({ $variant }) => $variant === 'secondary' ? '17.02rem' : '20.1rem'};
    width: ${({ $variant }) => $variant === 'secondary' ? '32.04rem' : '100%'};
    background-color: ${({ theme }) => theme.colors.darkish};
    background: ${({ $variant }) =>
        $variant === 'secondary'
            ? 'linear-gradient(180deg, rgba(242, 242, 242, 0.3) 10%, rgba(242, 242, 242, 1) 100%)'
            : 'linear-gradient(104.3deg, #4A4A49 2.66%, #20201F 90.57%)'
    };
    border-radius: 1.5rem;
    padding: ${({ $variant }) => $variant === 'secondary' ? '1.5rem 2rem' : '1.8rem 3rem'};
    color: ${({ theme }) => theme.colors.light};
    transition: all 0.3s ease;
    transform: ${({ $variant }) => $variant === 'secondary' ? 'translateY(14.5rem)' : 'none'};
    z-index: ${({ $variant }) => $variant === 'secondary' ? 2 : 1};

    ${({ $variant }) => $variant === 'secondary' && `
        backdrop-filter: blur(1rem);
    `}

    &:hover {
       transform: ${({ $variant }) =>
        $variant === 'secondary'
            ? 'translateY(14rem) scale(1.02)'
            : 'translateY(-0.5rem) scale(1.02)'
    };
    }
`;

export const CreditHeader = styled.div`
    display: flex;

    p{
        display: inline;
    }
`;

export const CardChip = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${({ $variant }) => $variant === 'secondary' ? '2rem' : '3rem'};
`;

export const CardInfoWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1rem;
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CardLogo = styled.div`
    transform: ${({ $variant }) => $variant === 'secondary' ? 'translateY(1rem)' : 'translateY(3rem)'};
`;

export const CardNumber = styled.div`
    color: ${({ $variant, theme }) => $variant === 'secondary' ? theme.colors.text.text1 : theme.colors.light};
    font-size: ${({ $variant }) => $variant === 'secondary' ? '1.6rem' : '1.7rem'};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    letter-spacing: 0.1rem;
    margin-top: ${({ $variant }) => $variant === 'secondary' ? '1.5rem' : '2.01rem'};
`;

export const CardDate = styled.div`
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    color: ${({ theme }) => theme.colors.text.text2};
    margin-top: 0.5rem;
`;

export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const CardBank = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    opacity: 0.7;
    margin-bottom: 1.5rem;

    span:first-child {
        font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    }
`;

export const ContactlessIcon = styled.div`
    font-size: 2.4rem;
    transform: rotate(90deg);
    opacity: 0.8;
`;
