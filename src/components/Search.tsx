import React, { createRef, useState } from 'react';
import styled from 'styled-components/macro';

import { ReactComponent as Magnifier } from '../assets/icons/magnifier.svg';
import { ReactComponent as ArrowLeft } from '../assets/icons/arrow-left.svg';

export const Search: React.FC = () => {
    const [isActive, setActive] = useState(false);

    const searchInput = createRef<HTMLInputElement>();
    const onFocus = () => {
        setActive(true);
        if (searchInput.current) {
            searchInput.current.focus();
            searchInput.current.placeholder = '';
        }
    };
    const onBlur = () => {
        setActive(false);
        if (searchInput.current) {
            searchInput.current.blur();
            searchInput.current.placeholder = 'Search or start new chat';
        }
    };
    return (
        <Root isActive={isActive} onClick={onFocus} onBlur={onBlur}>
            <IconButton isActive={isActive}>
                <MagnifierStyled width="18" height="18" isActive={isActive} />
                <ArrowLeftStyled isActive={isActive} />
            </IconButton>
            <Input ref={searchInput} placeholder="Search or start new chat" />
        </Root>
    );
};

interface Active {
    isActive: boolean;
}

const Root = styled.div<Active>`
    display: flex;
    background-color: ${(props) => (props.isActive ? '#fff' : '#f7f7f7')};
    border-bottom: 1px solid rgba(74, 74, 74, 0.2);
    padding: 0 32px;
    justify-content: center;
    padding: 10px 0;
`;

const IconButton = styled.button<Active>`
    width: 45px;
    height: 24px;
    box-shadow: none;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: white;
    border-radius: 18px 0 0 18px;
    position: relative;
    padding-top: 35px;
`;

export interface SVGInterface {
    color?: string | '#333';
    width?: string | '24';
    height?: string | '24';
    isActive?: boolean;
}

const MagnifierStyled = styled(Magnifier)<SVGInterface>`
    opacity: ${(props) => (props.isActive ? '0' : '1')};
    transition: all 0.24s cubic-bezier(0.4, 0, 0.2, 1);
    transform: rotate(0);
    position: absolute;
    top: 8px;
    left: 13px;
    path {
        fill: rgba(0, 0, 0, 0.3);
    }
`;

const ArrowLeftStyled = styled(ArrowLeft)<SVGInterface>`
    color: rgb(51, 183, 246);
    position: absolute;
    top: 6px;
    left: 13px;
    transform: ${(props) => (props.isActive ? 'scale(1) rotate(360deg)' : 'scale(0.8) rotate(225deg)')};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    opacity: ${(props) => (props.isActive ? '1' : '0')};
`;

const Input = styled.input`
    background-color: white;
    box-shadow: none;
    border: none;
    color: #4a4a4a;
    outline: none;
    border-radius: 0 18px 18px 0;
    width: 340px;
    padding-bottom: 5px;
    line-height: 30px;
    padding-right: 10px;
    font-size: 15px;
    min-height: 20px;
    padding-left: 12px;
`;
