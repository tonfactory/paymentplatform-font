import { Components, Theme } from '@mui/material'

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      borderStyle: 'dashed',
    }),
  },
} as Components<Theme>['MuiDivider']
