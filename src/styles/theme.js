import { createTheme } from '@mui/material/styles'

const fontSize = 10 // px
const htmlFontSize = 16
const coef = fontSize / 10

const theme = createTheme({
    palette: {
        primary: {
            main: '#8BBC01'
        },
        secondary: {
            main: '#FB7401'
        },
        dark: {
            main: '#26445A'
        },
    },

})

const secondary = '#8BBC01'
const primary = '#FB7401'
const dark = '#26445A'

export { primary, secondary, dark }
export default theme