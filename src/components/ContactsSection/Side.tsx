import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import * as conversationService from '../../api/conversations.service';

//Components
import { ConversationList } from './ConversationList';
import { Search } from '../Search';

//Interfaces
import { Conversation } from '../../api/conversations';

interface LeftSectionProps {
    conversations: Conversation[];
}
export const LeftSection: React.FC<LeftSectionProps> = ({ conversations }) => {
    return (
        <Root>
            <Search />
            <ConversationList conversations={conversations} />
        </Root>
    );
};

const Root = styled.section`
    display: flex;
    flex-direction: column;
`;
