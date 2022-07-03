import { Components, Theme } from '@mui/material'

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      '&[data-timer]': {
        height: 2,
        background: theme.palette.action.selected,

        '.MuiLinearProgress-bar': {
          background: theme.palette.primary.light,
        },
      },
    }),
  },
} as Components<Theme>['MuiLinearProgress']
