import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'fontsource-roboto';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {createMuiTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";

// Theme
const theme = createMuiTheme({
    palette: {
        // Hintergrundfarbe
        background:{
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
        }
    },
    typography: {
        h1: {
            fontSize: 30,
            fontWeight: "bolder"
        },
        h2: {
            fontSize: 20,
            fontWeight: "bold"
        },
        body1: {
            fontSize: 16
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
