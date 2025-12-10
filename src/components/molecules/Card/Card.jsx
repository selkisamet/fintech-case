import { StyledCard, IconContainer, CardHeader, CardContent, CardTitle, CardAmount, CardBody } from './Card.styles';

const Card = ({ children, icon, title, amount, hoverable = false, clickable = false, onClick, ...rest }) => {
    return (
        <StyledCard $hoverable={hoverable} $clickable={clickable} onClick={onClick} {...rest} >
            <CardHeader>
                {icon && (
                    <IconContainer>
                        {icon}
                    </IconContainer>
                )}

                <CardContent>
                    {title && <CardTitle>{title}</CardTitle>}
                    {amount && <CardAmount>{amount}</CardAmount>}
                </CardContent>
            </CardHeader>
            {children && <CardBody>{children}</CardBody>}
        </StyledCard>
    );
};

Card.IconContainer = IconContainer;
Card.Header = CardHeader;
Card.Content = CardContent;
Card.Title = CardTitle;
Card.Amount = CardAmount;
Card.Body = CardBody;

export default Card;