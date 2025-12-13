import { useState, useEffect } from 'react';
import {
    WalletCardContainer,
    WalletHeader,
    WalletTitle,
    MenuButton,
    CardsSection,
    CreditCard,
    CardInfo,
    CardNumber,
    CardDate,
    CardInfoWrap,
    CardLogo,
    CardChip,
    CreditHeader,
} from './WalletCard.styles';
import Text from '../../atoms/Text/Text';
import IconChip from '../../icons/IconChip';
import IconWifi from '../../icons/IconWifi';
import IconMastercard from '../../icons/IconMastercard';
import IconVisa from '../../icons/IconVisa';
import ScheduledTransfers from '../../molecules/ScheduledTransfers/ScheduledTransfers';
import { getWallet, getScheduledTransfers } from '../../../services/dashboardService';
import Skeleton from '../../atoms/Skeleton/Skeleton';

const WalletCard = () => {
    const [cards, setCards] = useState([]);
    const [transfers, setTransfers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [transfersLoading, setTransfersLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [walletResponse, transfersResponse] = await Promise.all([
                    getWallet(),
                    getScheduledTransfers(),
                ]);

                if (walletResponse.success && walletResponse.data?.cards) {
                    setCards(walletResponse.data.cards);
                }

                if (transfersResponse.success && transfersResponse.data?.transfers) {
                    setTransfers(transfersResponse.data.transfers);
                }
            } catch (error) {
                console.error('Error fetching wallet data:', error);
            } finally {
                setLoading(false);
                setTransfersLoading(false);
            }
        };

        fetchData();
    }, []);

    const formatCardNumber = (number, isSecondary = false) => {
        if (!number) return '';
        const cleaned = number.replace(/\s/g, '');
        if (isSecondary) {
            return cleaned.slice(0, 8) + '****';
        }
        return cleaned.match(/.{1,4}/g)?.join('\u00A0\u00A0') || number;
    };

    const formatExpiryDate = (month, year) => {
        if (!month || !year) return '';
        const monthStr = month.toString().padStart(2, '0');
        const yearStr = year.toString().slice(-2);
        return `${monthStr}/${yearStr}`;
    };

    const getCardIcon = (network, size) => {
        const networkLower = network?.toLowerCase();
        if (networkLower === 'visa') {
            return <IconVisa size={size} />;
        } else if (networkLower === 'mastercard' || networkLower === 'master') {
            return <IconMastercard size={size} />;
        }
        return <IconMastercard size={size} />;
    };

    const parseBankName = (bankString) => {
        if (!bankString) return { brandName: 'Fintech', bankName: 'Universal Bank' };
        const parts = bankString.split('|').map(part => part.trim());
        return {
            brandName: parts[0] || 'Fintech',
            bankName: parts[1] || 'Universal Bank'
        };
    };

    if (loading) {
        return (
            <WalletCardContainer>
                <WalletHeader>
                    <Skeleton width="100px" height="24px" />
                    <Skeleton width="24px" height="24px" style={{ marginLeft: 'auto' }} />
                </WalletHeader>
                <CardsSection>
                    <Skeleton width="320px" height="180px" borderRadius="1.5rem" />
                    <Skeleton width="320px" height="180px" borderRadius="1.5rem" />
                </CardsSection>
                <Skeleton width="100%" height="200px" borderRadius="1rem" />
            </WalletCardContainer>
        );
    }

    return (
        <WalletCardContainer>
            <WalletHeader>
                <WalletTitle>Wallet</WalletTitle>
                <MenuButton>⋯</MenuButton>
            </WalletHeader>

            <CardsSection>
                {cards.length > 0 && (
                    <>
                        <CreditCard>
                            <CreditHeader>
                                <Text as="p" color="light" variant="body1">
                                    {parseBankName(cards[0].bank).brandName}
                                </Text>
                                <Text as="p" customColor="#626260" weight="medium" variant="body2">
                                    &nbsp;|&nbsp;{parseBankName(cards[0].bank).bankName}
                                </Text>
                            </CreditHeader>
                            <CardChip>
                                <IconChip size={38} />
                                <IconWifi size={34} color="#363B41" />
                            </CardChip>
                            <CardInfoWrap>
                                <CardInfo>
                                    <CardNumber>
                                        {formatCardNumber(cards[0].cardNumber)}
                                    </CardNumber>
                                    <CardDate>
                                        {formatExpiryDate(cards[0].expiryMonth, cards[0].expiryYear)}
                                    </CardDate>
                                </CardInfo>
                                <CardLogo>
                                    <IconMastercard size={50} />
                                </CardLogo>
                            </CardInfoWrap>
                        </CreditCard>

                        {cards.length > 1 && (
                            <CreditCard $variant="secondary">
                                <CreditHeader>
                                    <Text as="p" color="light" variant="body1">
                                        {parseBankName(cards[1].bank).brandName}
                                    </Text>
                                    <Text as="p" color="gray" weight="medium" variant="body2">
                                        &nbsp;|&nbsp;{parseBankName(cards[1].bank).bankName}
                                    </Text>
                                </CreditHeader>
                                <CardChip $variant="secondary">
                                    <IconChip size={30} />
                                    <IconWifi size={34} color="#363B41" />
                                </CardChip>
                                <CardInfoWrap>
                                    <CardInfo>
                                        <CardNumber $variant="secondary">
                                            {formatCardNumber(cards[1].cardNumber, true)}
                                        </CardNumber>
                                        <CardDate $variant="secondary">
                                            {formatExpiryDate(cards[1].expiryMonth, cards[1].expiryYear)}
                                        </CardDate>
                                    </CardInfo>
                                    <CardLogo $variant="secondary">
                                        {getCardIcon(cards[1].network, 32)}
                                    </CardLogo>
                                </CardInfoWrap>
                            </CreditCard>
                        )}
                    </>
                )}
            </CardsSection>

            <ScheduledTransfers transfers={transfers} loading={transfersLoading} />
        </WalletCardContainer>
    );
};

export default WalletCard;
