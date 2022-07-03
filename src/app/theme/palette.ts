import { Palette, alpha } from '@mui/material'
import {
  teal,
  deepPurple,
  red,
  orange,
  blue,
  lightGreen,
} from '@mui/material/colors'

const textColor = (opacity = 1) => alpha('#0F1F48', opacity)

export default {
  primary: {
    light: teal[100],
    main: teal[600],
    dark: teal[800],
  },
  secondary: {
    light: deepPurple[100],
    main: deepPurple[500],
  },

  error: {
    light: red[100],
    main: red[500],
  },

  warning: {
    light: orange[100],
    main: orange[500],
  },

  info: {
    light: blue[100],
    main: blue[700],
  },
  success: {
    light: lightGreen[100],
    main: lightGreen[600],
  },

  background: {
    paper: '#FFF',
    default: '#FAFBFB',
  },

  divider: '#D3E5EA',

  text: {
    primary: textColor(),
    secondary: textColor(0.6),
    disabled: textColor(0.3),
  },

  action: {
    disabledBackground: textColor(0.12),
    selected: textColor(0.08),
    hover: textColor(0.04),
  },
} as Palette
