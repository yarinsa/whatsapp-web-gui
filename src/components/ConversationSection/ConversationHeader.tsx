//Libraries
import React from 'react';
import styled from 'styled-components/macro';

//Interfaces
import { Participant } from '../../api/conversations';

//Components
import { Avatar } from '../Avatar';

//Assets
import { ReactComponent as FileIcon } from '../../assets/icons/file.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as MagnifierIcon } from '../../assets/icons/magnifier.svg';

interface MainHeaderProps {
    id: string;
    imageUrl: string;
    title: string;
    participants: Participant[];
}
export const MainHeader: React.FC<MainHeaderProps> = ({ id, imageUrl, title, participants }) => {
    const isGroup = participants.length > 1;
    const participantsToRender = participants.map((participant) => participant.firstName).join(', ');
    return (
        <Root>
            <AvatarContainer>
                <AvatarStyled size="40px" imageUrl={imageUrl} />
            </AvatarContainer>
            <Content>
                <Title title={title}>{title}</Title>
                {isGroup && <Participants title={participantsToRender}>{participantsToRender}</Participants>}
            </Content>
            <Options>
                <OptionContainer>
                    <MagnifierIcon />
                </OptionContainer>
                <OptionContainer>
                    <FileIcon />
                </OptionContainer>
                <OptionContainer>
                    <MenuIcon />
                </OptionContainer>
            </Options>
        </Root>
    );
};

const Root = styled.div`
    background-color: #ededed;
    height: 59px;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
    border-right: 1px solid #e0e0e0;
    border-left: 1px solid #e0e0e0;
`;

const AvatarContainer = styled.div`
    margin-right: 15px;
    cursor: pointer;
`;
const AvatarStyled = styled(Avatar)``;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    flex: 1;
`;

const Title = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
`;
const Participants = styled.div`
    font-size: 13px;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
`;
const Options = styled.div`
    display: flex;
    justify-content: space-evenly;
    color: #919191;
    cursor: pointer;
`;
const OptionContainer = styled.div`
    width: 40px;
    height: 40px;
    margin-left: 10px;
    padding: 8px;
`;
