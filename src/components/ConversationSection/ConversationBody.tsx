import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

//Interfaces
import { Conversation, Message, Participant } from '../../api/conversations';

//Services
import { getById as getConversationById } from '../../api/conversations.service';
import { MessageView } from './Message';

interface ConversationBodyProps {
    messages: Message[];
    conversationId: string;
}

export const ConversationBody: React.FC<ConversationBodyProps> = ({ messages, conversationId }) => {
    const [loading, setLoading] = useState(false);
    const [loadedConversation, setLoadedConversation] = useState<Conversation>();
    const [isGroup, setIsGroup] = useState<boolean>(false);
    useEffect(() => {
        async function loadConversation() {
            const conversation = await getConversationById(conversationId);
            // const conversation = await getConversationById('b0c23960-5fca-46dd-845b-e6d9748dc8ee');
            console.log(conversation);

            setLoadedConversation(conversation);
            setIsGroup(conversation.participants.length > 2);
            console.log(isGroup);
            // const messageElements = loadedConversation.messages.map((message) => <MessageView {...message} />);
            setLoading(false);
        }

        setLoading(true);
        loadConversation();
    }, []);

    return (
        <Root>
            {loadedConversation
                ? loadedConversation.messages.map((message, index) => (
                      <MessageView key={index} {...message} isGroup={isGroup} />
                  ))
                : 'Loading...'}
        </Root>
    );
};

const Root = styled.div`
    flex: 1;
    border: 1px solid rgba(0, 0, 0, 0.03);
    background-color: rgb(222, 215, 207);
    overflow: auto;
    min-height: 0;
`;
