import { Components, Theme } from '@mui/material'

export default {
  defaultProps: {
    disableRipple: true,
    color: 'default',
  },

  styleOverrides: {
    root: ({ theme }) => ({
      width: 40,
      height: 40,
      color: theme.palette.text.disabled,

      ':hover, :focus-within': {
        color: theme.palette.text.secondary,
      },
    }),
  },
} as Components<Theme>['MuiCheckbox']
