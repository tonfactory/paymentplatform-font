import { createTheme } from '@mui/material'
const { shadows } = createTheme()
shadows[1] =
  '0px 0px 20px rgba(33, 35, 42, 0.08), 0px 0px 1px rgba(33, 35, 42, 0.15)'
shadows[2] =
  '0px 0px 20px rgba(27, 31, 42, 0.25), 0px 0px 1px rgba(27, 31, 42, 0.3)'
export default shadows
