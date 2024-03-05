import { createTheme } from '@mui/material/styles'

const fontSize = 10 // px
const htmlFontSize = 16
const coef = fontSize / 10

const theme = createTheme({
    selectedItem: '#e1e8ff',
    primary: '#3366FF',
    pink: '#FD4279',
    error: '#FF5858',
    success: '#7ED321',
    error: '#FF5858',
    light: '#f4f7ff',
    disabled: 'rgb(121, 121, 121)',
    lightBox: '#3366FF0D',
    secondary: '#6F778A',
    secondaryLight: '#e6e6e6',
    fontFamily: 'Montserrat !important',
    baseWrapContainer: {
        padding: '30px 0px 30px 0px',
    },
    palette: {
        primary: {
            main: '#4273FF',
            light: '#ffd449',
            contrastText: '#000000',
            secondary: '#797979',
            secondaryLight: '#e6e6e6',
        },
        success: {
            main: '#7ed321',
            contrastText: '#000000',
            secondary: '#797979',
            secondaryLight: '#e6e6e6',
        },
    },
    typography: {
        fontFamily: 'Montserrat !important',
        fontSize: 12,
        color: '#000000',
        pxToRem: size => `${(size / htmlFontSize) * coef}rem`,
    },
    switch: {
        color: 'red',
        primary: 'red',
    }
})

export default theme