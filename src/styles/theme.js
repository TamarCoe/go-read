import { createTheme } from '@mui/material/styles'

const secondary = '#8BBC01'
const primary = '#FB7401'
const dark = '#26445A'
const black = "#000"

const theme = createTheme({
    palette: {
        primary: {
            main: '#8BBC01',
            contrastText: "white"
        },
        secondary: {
            main: '#FB7401',
            contrastText: "white"
        },
        dark: {
            main: '#26445A'
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'outlined' &&
                    // ownerState.color === 'primary' && 
                    {
                        color: dark,
                    }),
                }),
            },
        },
    },
})



export { primary, secondary, dark, black }
export default theme