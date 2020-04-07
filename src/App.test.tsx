import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import styled from 'styled-components';

test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
