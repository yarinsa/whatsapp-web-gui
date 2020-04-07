import React from 'react';
import styled from 'styled-components/macro';

//SVGs..
import { ReactComponent as Smiley } from '../../assets/icons/smiley.svg';
import { ReactComponent as Send } from '../../assets/icons/send.svg';

export const ConversationInput: React.FC<any> = () => {
    return (
        <Root>
            <ButtonContainer>
                <Smiley />
            </ButtonContainer>
            <Input placeholder="Type a message..." />
            <ButtonContainer>
                <Send />
            </ButtonContainer>
        </Root>
    );
};

const Root = styled.div`
    min-height: 62px;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    padding: 5px 10px;
    align-items: center;
`;

const Input = styled.input`
    background-color: white;
    box-shadow: none;
    border: none;
    color: #4a4a4a;
    outline: none;
    border-radius: 18px;
    width: 340px;
    line-height: 30px;
    padding: 5px;
    font-size: 15px;
    min-height: 20px;
    padding-left: 12px;
    flex: 1;
    margin: 5px 10px;
`;

const ButtonContainer = styled.span`
    display: block;
    padding: 5px 10px;
    path {
        color: #919191;
    }
    cursor: pointer;
`;
