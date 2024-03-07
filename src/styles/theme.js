import { createTheme } from '@mui/material/styles'

const fontSize = 10 // px
const htmlFontSize = 16
const coef = fontSize / 10

const theme = createTheme({
    primary: '#8BBC01',
    direction: 'rtl'
})

const secondary = '#1a76d2'
const primary = "#8BBC01"
const dark = "#26445A"

export { primary, secondary, dark }
export default theme