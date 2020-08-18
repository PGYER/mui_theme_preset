import { blue, amber, pink, green, grey, deepPurple, indigo, cyan, deepOrange, red } from '@material-ui/core/colors'

const white = {
  50: '#fff',
  100: '#fff',
  200: '#fff',
  300: '#fff',
  400: '#fff',
  500: '#fff',
  600: '#fff',
  700: '#fff',
  800: '#fff',
  900: '#fff',
  A100: '#fff',
  A200: '#fff',
  A400: '#fff',
  A700: '#fff',
  contrastText: '#424242',
  dark: grey[100],
  light: grey[400],
  main: '#fff'
}

const black = {
  50: '#000',
  100: '#000',
  200: '#000',
  300: '#000',
  400: '#000',
  500: '#000',
  600: '#000',
  700: '#000',
  800: '#000',
  900: '#000',
  A100: '#000',
  A200: '#000',
  A400: '#000',
  A700: '#000',
  contrastText: '#FFF',
  dark: '#000',
  light: grey[400],
  main: '#000'
}

blue.main = blue[500]
blue.light = blue[300]
blue.dark = blue[700]
blue.contrastText = '#fff'

green.main = green[500]
green.light = green[300]
green.dark = green[700]
green.contrastText = '#fff'

amber.main = amber[400]
amber.light = amber[200]
amber.dark = amber[600]
amber.contrastText = '#fff'

pink.main = pink[500]
pink.light = pink[300]
pink.dark = pink[700]
pink.contrastText = '#fff'

deepPurple.main = deepPurple[500]
deepPurple.light = deepPurple[300]
deepPurple.dark = deepPurple[700]
deepPurple.contrastText = '#fff'

grey.main = grey[500]
grey.light = grey[300]
grey.dark = grey[700]
grey.contrastText = '#fff'

indigo.main = indigo[500]
indigo.light = indigo[300]
indigo.dark = indigo[700]
indigo.contrastText = '#fff'

deepOrange.light = deepOrange[400]
deepOrange.main = deepOrange[600]
deepOrange.dark = deepOrange[800]
deepOrange.contrastText = '#fff'

cyan.main = cyan[500]
cyan.light = cyan[300]
cyan.dark = cyan[700]
cyan.contrastText = '#fff'

red.main = red[500]
red.light = red[300]
red.dark = red[700]
red.contrastText = '#fff'

const border = '#dee2ec'

const text = {
  main: '#2f354d',
  light: '#7a859e',
  lighter: '#b1b6c3'
}

const background = {
  dark: '#E9EDF4',
  main: '#F1F3F7',
  light: '#ffffff',
  paginationHover: blue[50]
}

export default {
  primary: blue,
  secondary: grey,
  info: blue,
  success: green,
  warning: amber,
  error: pink,
  blue,
  amber,
  pink,
  green,
  grey,
  deepPurple,
  indigo,
  cyan,
  deepOrange,
  red,
  white,
  black,
  border,
  text,
  background
}
