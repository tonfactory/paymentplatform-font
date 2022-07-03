import { Components, Theme } from '@mui/material'

export default {
  defaultProps: {
    color: 'default',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.text.disabled,
      transition: theme.transitions.create(['color', 'background']),

      ':hover, :focus': {
        color: theme.palette.text.secondary,
        background: theme.palette.action.hover,
      },

      ':disabled': {
        color: theme.palette.text.disabled,
        background: theme.palette.action.hover,
      },
    }),

    colorPrimary: ({ theme }) => ({
      color: theme.palette.primary.main,
      background: theme.palette.action.hover,

      ':hover, :focus': {
        color: theme.palette.text.secondary,
        background: theme.palette.action.disabledBackground,
      },
    }),
  },
} as Components<Theme>['MuiIconButton']
