import React, { useState } from 'react';
import styled from 'styled-components/macro';

//Components
import { MainHeader } from './ConversationHeader';

//Interfaces
import { Conversation, Message, Participant } from '../../api/conversations';
import { ConversationBody } from './ConversationBody';
import { ConversationInput } from './ConversationInput';

interface RightSectionProps {
    id: string;
    title: string;
    imageUrl: string;
    messages: Message[];
    participants: Participant[];
}
export const RightSection: React.FC<RightSectionProps> = ({ id, title, imageUrl, messages, participants }) => {
    const [selectedConversation, setSelectedConversation] = useState<Conversation | {}>();
    console.log(selectedConversation, 'conversationView');
    return (
        <Root>
            <MainHeader id={id} title={title} imageUrl={imageUrl} participants={participants} />
            <ConversationBody conversationId={id} messages={messages} />
            <ConversationInput />
        </Root>
    );
};

const Root = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
`;
