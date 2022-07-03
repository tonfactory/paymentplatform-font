import { Components, Theme } from '@mui/material'

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      position: 'relative',
      borderRadius: +theme.shape.borderRadius * 1.5,
      boxShadow: theme.shadows[1],
      background: theme.palette.background.paper,
      padding: theme.spacing(0, 2, 1),
    }),
  },
} as Components<Theme>['MuiTableContainer']
