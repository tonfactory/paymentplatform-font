import * as Mui from '@mui/material'

import { FCC } from '../../types'
import typography from './typography'
import palette from './palette'
import shadows from './shadows'
import components from './components'


const theme = Mui.createTheme({
  typography,
  palette,
  shadows,
  shape: { borderRadius: 8 },
  components,
})

export const ThemeProvider: FCC = ({ children }) => (
  <Mui.ThemeProvider theme={theme}>
    <Mui.CssBaseline />
    {children}
  </Mui.ThemeProvider>
)
