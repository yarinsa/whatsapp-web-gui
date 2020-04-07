import React, { useEffect, useState } from 'react';
import 'normalize.css';
import './App.css';
import styled from 'styled-components/macro';

//Components
import { LeftSection } from './components/ContactsSection/Side';
import { RightSection } from './components/ConversationSection/ConversationView';

//Interfaces
import { Conversation } from './api/conversations';

//Services
import * as conversationService from './api/conversations.service';

const App: React.FunctionComponent = () => {
    const [loading, setLoading] = useState(false);
    const [loadedConversations, setLoadedConversations] = useState<Conversation[]>();
    const [selectedConversation, setSelectedConversation] = useState<Conversation>();
    useEffect(() => {
        async function loadConversations() {
            const conversations = await conversationService.getConversations();
            console.log(conversations);
            setLoadedConversations(conversations);
            setSelectedConversation(conversations[0]);
            const selectedConversation = React.createContext<Conversation>(conversations[0]);
            setLoading(false);
        }

        setLoading(true);
        loadConversations();
    }, []);
    return (
        //TODO: make styled component
        <div className="App">
            <Root>
                {loadedConversations ? <LeftSection conversations={loadedConversations} /> : 'Loading...'}

                {selectedConversation ? <RightSection {...selectedConversation} /> : 'Loading'}
            </Root>
        </div>
    );
};

export default App;

const Root = styled.div`
    display: flex;
    overflow: hidden;
    max-height: 100vh;
`;
