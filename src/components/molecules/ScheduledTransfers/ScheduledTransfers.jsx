import {
    TransfersSection,
    TransfersHeader,
    TransfersTitle,
    ViewAllButton,
    TransfersList,
    TransferItem,
    TransferAvatar,
    TransferInfo,
    TransferName,
    TransferDate,
    TransferAmount,
} from './ScheduledTransfers.styles';
import { formatDate } from '../../../utils/formatters';

const ScheduledTransfers = ({ transfers = [], loading = false }) => {

    if (loading) {
        return (
            <TransfersSection>
                <TransfersHeader>
                    <TransfersTitle>Scheduled Transfers</TransfersTitle>
                </TransfersHeader>
                <div>Loading...</div>
            </TransfersSection>
        );
    }

    return (
        <TransfersSection>
            <TransfersHeader>
                <TransfersTitle>Scheduled Transfers</TransfersTitle>
                <ViewAllButton>View All →</ViewAllButton>
            </TransfersHeader>

            <TransfersList>
                {transfers.length > 0 ? (
                    transfers.slice(0, 5).map((transfer) => (
                        <TransferItem key={transfer.id}>
                            <TransferAvatar>
                                {transfer.image ? (
                                    <img
                                        src={transfer.image}
                                        alt={transfer.name}
                                        style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                                    />
                                ) : (
                                    transfer.name?.charAt(0) || '👤'
                                )}
                            </TransferAvatar>
                            <TransferInfo>
                                <TransferName>{transfer.name}</TransferName>
                                <TransferDate>
                                    {formatDate(transfer.date)}
                                </TransferDate>
                            </TransferInfo>
                            <TransferAmount>
                                {transfer.currency || '$'}{Math.abs(transfer.amount).toFixed(2)}
                            </TransferAmount>
                        </TransferItem>
                    ))
                ) : (
                    <div>No scheduled transfers</div>
                )}
            </TransfersList>
        </TransfersSection>
    );
};

export default ScheduledTransfers;