import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';

//Interfaces
import { Message } from '../../api/conversations';

interface MessageProps {
    readAt: Date | null;
    sentAt: Date;
    by: string; //phone number
    type: string;
    content: string;
    isGroup: boolean;
}
export const MessageView: React.FC<MessageProps> = ({ readAt, sentAt, by, content, isGroup, type }) => (
    <Root>
        <IncomingMessage type={type}>
            {isGroup && <SenderName>{by}</SenderName>}
            {type === 'image' && <ImageContent src={content} />}
            <TextContent>{content}</TextContent>
            <MessageDetails>{moment(sentAt).format('HH:mm')}</MessageDetails>
        </IncomingMessage>
        <OutcomingMessage type={type}>
            {isGroup && <SenderName>{by}</SenderName>}
            {type === 'image' && <ImageContent src={content} />}
            <TextContent>{content}</TextContent>
            <MessageDetails>{moment(sentAt).format('HH:mm')}</MessageDetails>
        </OutcomingMessage>
    </Root>
);

const Root = styled.div`
    padding: 0 7%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
`;
const MessageBubble = styled.div<{ type: string }>`
    margin-top: 20px;
    box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
    max-width: 70%;
    position: relative;
    text-align: left;
    padding: ${(props) => (props.type === 'image' ? '3px' : ' 8px 7px')};

    ::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border: 22px solid transparent;
        border-top: 0;
        z-index: -1;
    }
`;

const IncomingMessage = styled(MessageBubble)`
    background-color: rgb(255, 255, 255);
    border-radius: 0 7.5px 7.5px 7.5px;

    ::after {
        left: -12px;
        top: 0;
        border-right-color: rgb(255, 255, 255);
        border-left: 0;
    }
`;
const OutcomingMessage = styled(MessageBubble)`
    border-radius: 7.5px 0 7.5px 7.5px;
    align-self: flex-end;
    background-color: #dcf8c6;
    ::after {
        right: -12px;
        top: 0;
        border-left-color: rgb(220, 248, 198);
        border-right: 0;
    }
`;

const SenderName = styled.div`
    font-size: 13px;
    font-weight: 500;
    padding-left: 4px;
    color: rgb(239, 120, 19);
`;

const TextContent = styled.div`
    padding: 20px 7px;
`;

const ImageContent = styled.img`
    width: 330px;
    height: 330px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    border-radius: 6px;
    cursor: pointer;
`;

const MessageDetails = styled.span`
    font-size: 11px;
    position: absolute;
    bottom: 9px;
    right: 10px;
    color: rgba(0, 0, 0, 0.45);
`;
