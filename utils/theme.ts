import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// A custom theme for this app
export let theme = createTheme({
    typography: {
        fontFamily: 'Heebo, sans-serif',
    },
    palette: {
        primary: {
            main: '#FF7999',
        },
        secondary: {
            light: '#EDF7FA',
            main: '#60CAD9',
        },
        error: {
            main: red.A400,
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                maxWidthSm: {
                    maxWidth: '680px',
                    '@media (min-width: 600px)': {
                        maxWidth: '680px'
                    }
                },
                maxWidthMd: {
                    maxWidth: '860px',
                    '@media (min-width: 900px)': {
                        maxWidth: '860px'
                    }
                },
            },
            defaultProps: {
                maxWidth: 'md'
            },
            variants: []
        },
        MuiLink: {
            defaultProps: {
                underline: 'none',
            },
            styleOverrides: {
                root: {
                    color: 'black',
                    '&:hover,&.active': {
                        color: '#FF6464'
                    }
                }
            }
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'contained', color: 'primary' },
                    style: {
                        color: 'white'
                    }
                }

            ]
        }

    },



});
// theme.typography.h3 = {
//     fontSize: '2rem',
//     [theme.breakpoints.up('md')]: {
//         fontSize: '3rem'
//     }
// }
theme = responsiveFontSizes(theme)
