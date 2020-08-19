import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {backgroundColor, textColor} from './theme'

const ThemeToggleContext = React.createContext()

export const useTheme = () => React.useContext( ThemeToggleContext );

export const MyThemeProvider = ({ children }) => {
    
    const [ themeState, setThemeState ] = React.useState({ mode : 'light' });
    
    const toggle = () => {
        const mode = ( themeState.mode === 'light' ? 'dark' : 'light' );
        setThemeState({ mode: mode })
    };

    const Wrapper = styled.div`
    background-color: ${ backgroundColor };
    color: ${textColor};
    `;

    return(
        <ThemeToggleContext.Provider value={{ toggle: toggle }} >
            {/* <ThemeProvider theme={{ mode: 'light' }} >  // hard coding in the color  */}
            <ThemeProvider theme={{ mode: themeState.mode }} >
                <Wrapper>
                    {children}
                </Wrapper>
            </ThemeProvider>
        </ThemeToggleContext.Provider>
    )
}