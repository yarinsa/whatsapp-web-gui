import React from 'react';
import styled from 'styled-components';

interface AvatarProps {
    imageUrl: string;
    size: string;
}
export const Avatar = styled.div<AvatarProps>`
    background-image: url(${(props) => props.imageUrl});
    width: ${(props) => props.size};
    border-radius: 100vh;
    height: ${(props) => props.size};
    background-size: cover;
`;
