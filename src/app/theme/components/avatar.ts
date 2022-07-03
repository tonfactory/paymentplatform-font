import { Components, Theme } from '@mui/material'

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      background: theme.palette.error.light,
      color: theme.palette.error.main,
    }),
  },
} as Components<Theme>['MuiAvatar']
