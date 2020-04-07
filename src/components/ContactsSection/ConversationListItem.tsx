import React, { useState } from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';

//Components
import { Avatar } from '../Avatar';

//Interfaces
import { ConversationPreview } from '../../api/conversations';

export const ConversationListItem: React.FC<ConversationPreview> = ({
    imageUrl,
    title,
    content,
    unreadCount,
    time,
}) => {
    const isUnread = unreadCount > 0;
    const [isActive, setActive] = useState(false);

    return (
        <Root isActive={isActive} onMouseDown={() => setActive(!isActive)}>
            <AvatarContainer>
                <Avatar size="50px" imageUrl={imageUrl} />
            </AvatarContainer>

            <Content>
                <FirstRow>
                    <Title isUnread={isUnread}>{title}</Title>
                    <Time isUnread={isUnread}>{moment(time).format('HH:mm')}</Time>
                </FirstRow>
                <SecondRow isUnread={isUnread && isActive}>
                    <MessagePreview isUnread={isUnread}>{content}</MessagePreview>

                    {isUnread && <UnreadBadge>{unreadCount}</UnreadBadge>}
                </SecondRow>
            </Content>
        </Root>
    );
};

const Root = styled.div<{ isActive?: boolean }>`
    display: flex;
    background-color: ${(props) => (props.isActive ? 'rgb(235, 235, 235)' : 'white')};
    padding-right: 15px;
    padding-left: 8px;
    align-items: center;
    height: 72px;
    cursor: pointer;
    :hover {
        background-color: rgb(245, 245, 245);
    }
`;

const AvatarContainer = styled.div`
    padding-right: 13px;
    margin-bottom: 8px;
    /* TODO: Margin vs padding */
`;

const Content = styled.div`
    border-bottom: 1px solid #f2f2f2;

    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
    /* Why height?? */
    justify-content: center;
`;

const FirstRow = styled.div`
    margin-bottom: 3px;
    align-items: center;
    display: flex;
    justify-content: space-between;
`;
const Title = styled.h2<{ isUnread?: boolean }>`
    font-size: 17px;
    margin: 0;
    text-align: left;
    flex: 1;
    font-weight: ${(props) => (props.isUnread ? '600' : 'normal')};
`;
const Time = styled.span<{ isUnread?: boolean }>`
    font-size: 12px;
    margin-top: 0;
    font-weight: ${(props) => (props.isUnread ? '600' : 'normal')};
    color: ${(props) => (props.isUnread ? '#333' : '#4a4a4a')};
`;

const SecondRow = styled.div<{ isUnread?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-weight: 500;
    line-height: 14px;
`;

const MessagePreview = styled.p<{ isUnread?: boolean }>`
    font-size: 22px;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${(props) => (props.isUnread ? '#333' : '#4a4a4a')};
    font-weight: ${(props) => (props.isUnread ? '600' : '400')};
    margin: 0;
    overflow: hidden;
    font-size: 14px;
    line-height: 10px;
    min-height: 20px;
    /* why min - height? */
`;

const UnreadBadge = styled.div`
    background-color: #06d755;
    font-size: 12px;
    border-radius: 14px;
    padding: 3px 7px;
    text-align: center;
    color: white;
    margin-left: 6px;
    vertical-align: top;
    flex: none;
    /* why vertical align & flex none? */
    font-weight: 600;
`;
