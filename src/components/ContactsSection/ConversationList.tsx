import React from 'react';
import styled from 'styled-components';

//Components
import { ConversationListItem } from './ConversationListItem';

//Interfaces
import { Conversation } from '../../api/conversations';

interface ConversationListProps {
    conversations: Conversation[];
}
export const ConversationList: React.FC<ConversationListProps> = ({ conversations }) => {
    const ConversationList = conversations.map((conversation, index) => {
        let unreadCount = conversation.messages.reduce((totalUnread, message) => {
            return message.readAt ? totalUnread : totalUnread + 1; //if readAt === null then unread++
        }, 0);

        const lastMessage = conversation.messages[conversation.messages.length - 1];

        // text > message preview
        return (
            <ConversationListItem
                key={index}
                imageUrl={conversation.imageUrl}
                title={conversation.title}
                unreadCount={unreadCount}
                content={lastMessage.content}
                time={lastMessage.sentAt}
            />
        );
    });
    return <Root>{ConversationList}</Root>;
};

const Root = styled.div`
    overflow-y: scroll;
    height: 100vh;
    width: 415px;
`;
