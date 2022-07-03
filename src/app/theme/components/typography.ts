import { Components, Theme } from '@mui/material'

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    login: true
  }
}

export default {} as Components<Theme>['MuiTypography']
