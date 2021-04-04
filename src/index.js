import React from 'react';
import ReactDOM from 'react-dom';

import 'fontsource-roboto';
import "../node_modules/video-react/dist/video-react.css";

import App from './App';
import reportWebVitals from './reportWebVitals';
import {createMuiTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";

// Theme
const theme = createMuiTheme({
    palette: {
        // Hintergrundfarbe
        background: {
            default: "#303234",
        },
        // Textfarbe
        text: {
            primary: "#F2F2F2"
        },
        // IMDB Orange
        primary: {
            main: "#F5C518"
        },
        // Dunkles (Header) Grau
        secondary: {
            main: "#232427"
        },
        balken: "#5B5F63"
    },
    typography: {
        h1: {
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: "0.03em"
        },
        h2: {
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.05em"
        },
        h3: {
            fontSize: 16,
            lineHeight: 1.5,
            letterSpacing: "0.00938em"
        },
        body1: {
            fontSize: 14
        },
        body2: {
            fontSize: 12
        }
    }
});


ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <App/>
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
