import React from 'react'
import styled, { withTheme } from 'styled-components';
import { useTheme } from './ThemeContext';
import { buttonBackgroundColor, buttonTextColor } from './theme';

function DeepNestedComponent (props){

    const themeToggle = useTheme();

    const Button = styled.button`
    background: ${buttonBackgroundColor};
    color: ${buttonTextColor};
    `;

    return (
        <Button onClick={() => themeToggle.toggle()}>
          {props.theme.mode === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </Button>
    )
}

export default withTheme(DeepNestedComponent);