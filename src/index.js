import React from 'react';
import ReactDOM from 'react-dom';
import './main_style.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'fontsource-roboto';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {createMuiTheme, CssBaseline, makeStyles, MuiThemeProvider} from "@material-ui/core";

// Theme
const theme = createMuiTheme({
    palette: {
        // Hintergrundfarbe
        background:{
            default: "#3D3F42",
        },
        // Textfarbe
        text: {
            primary: "#F2F2F2"
        },
        // IMDB Orange
        primary: {
            main: "#d89d2a"
        },
        // Dunkles (Header) Grau
        secondary: {
            main: "#353638"
        }
    },
    typography: {
        h1: {
            fontSize: 30,
            fontWeight: "bold"
        },
        h2: {
            fontSize: 20
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
